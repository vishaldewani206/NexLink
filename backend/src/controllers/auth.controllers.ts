import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { User } from "../models/User";
import { ApiResponse } from "../utils/ApiResponse";
import { sendVerificationCode } from "../helper/verifyAndEmail";
import { sendToken } from "../helper/sendToken";
import { cookieOptions } from "../utils/cookieOptions";



interface RegisterBody {
    name: string
    email: string
    password: string
}

const register = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body as RegisterBody

  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required!")
  }

  const existingUser = await User.findOne({ email, accountVerified: true })
  if (existingUser) {
    throw new ApiError(400, "User is already registered")
  }

  const THIRTY_MINUTES = 30 * 60 * 1000
  const now = Date.now()

  let user = await User.findOne({ email, accountVerified: false }).select("+password +verificationCode +verificationCodeExpire +attemptsTime +attempts")

  if (user) {
    const lastAttempt = user.attemptsTime
      ? new Date(user.attemptsTime).getTime()
      : 0
    const timeDiff = now - lastAttempt

    if (timeDiff > THIRTY_MINUTES) {
      user.attempts = 0
      user.attemptsTime = new Date(now)
    }

    if (user.attempts >= 3 && timeDiff <= THIRTY_MINUTES) {
      user.verificationCode = undefined
      user.verificationCodeExpire = undefined
      await user.save()
      throw new ApiError(
        429,
        "You have exceeded the maximum number of attempts (3). Please wait 30 minutes before trying again."
      )
    }

    user.attempts += 1
    user.attemptsTime = new Date(now)
    await user.save()

  } else {
    user = await User.create({
      name,
      email,
      password,
      attempts: 1,
      attemptsTime: new Date(now),
  })
  }

  const verificationCode = user.generateVerificationCode()
  await user.save()
  await sendVerificationCode(verificationCode, email, name) 

  const safeUser = await User
    .findById(user._id)
    .select("+password +resetPasswordToken +resetPasswordExpire +verificationCode +verificationCodeExpire +attemptsTime +attempts") //UNCOMMENT

  res.status(200).json(
    new ApiResponse(200, safeUser, `Verification code sent successfully to ${name}`)
  )
})


const login = asyncHandler(async (req: Request,res: Response) : Promise<void> => {
    const {email, password} = req.body

    if(!email || !password){
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.findOne({email, accountVerified: true}).select("+password")

    if(!user){
        throw new ApiError(400, "Invalid email or password")
    }

    const isPasswordMatched = await user.comparePassword(password)

    if(!isPasswordMatched){
        throw new ApiError(400, "Invalid email or password")
    }

    sendToken(user, 200, "logged in successfully", res)

})


const logout = asyncHandler(async (req,res) => {
  res.clearCookie("token", {
    ...cookieOptions(0),
    expires: new Date(0)
  })
  res.status(200).json(new ApiResponse(200, {}, "logged out successfully"))
})


const verifyOtp = asyncHandler(async (req: Request, res: Response) => {
  const { email, otp } = req.body as { email: string; otp: string }

  if (!email || !otp) {
    throw new ApiError(400, "All fields are required")
  }

  const user = await User.findOne({ email, accountVerified: false }).select(
    "+verificationCode +verificationCodeExpire +attempts +attemptsTime"
  )

  const isVerifiedUser = await User.findOne({ email, accountVerified: true })

  if (!user && isVerifiedUser) {
    throw new ApiError(400, "User is already verified")
  }

  if (!user) {
    throw new ApiError(404, "User not found")
  }

  if (user.verificationCode !== Number(otp)) {
    throw new ApiError(400, "Invalid OTP")
  }

  const currentTime = Date.now()
  const verificationCodeExpire = new Date(user.verificationCodeExpire!).getTime()

  if (currentTime > verificationCodeExpire) {
    throw new ApiError(400, "OTP Expired")
  }

  user.attempts = 0
  user.attemptsTime = undefined
  user.accountVerified = true
  user.verificationCode = undefined
  user.verificationCodeExpire = undefined

  await user.save({ validateModifiedOnly: true })

  sendToken(user, 200, "Account Verified", res)
})

export { register, login, logout, verifyOtp }


