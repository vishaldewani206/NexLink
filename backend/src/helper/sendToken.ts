import { Response } from "express"
import { IUser } from "../models/User"
import { ApiResponse } from "../utils/ApiResponse"


export const sendToken = (user:IUser, statusCode:number, message:string, res:Response)=>{
    const token = user.generateToken()

    const days = Number(process.env.COOKIE_EXPIRE) || 1;

    const userObject = user.toObject()
    delete userObject.password
    res.status(statusCode)
    .cookie('token', token, {
        expires: new Date(Date.now() + days  * 24 * 60 * 60 * 1000),
        httpOnly: true,  
    })
    .json(new ApiResponse(statusCode, userObject, message))
}