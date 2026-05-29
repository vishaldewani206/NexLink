import {Router} from "express"
import { login, logout, register, verifyOtp } from "../controllers/auth.controllers"

const router = Router()

router.post("/register",  register)
router.post("/login", login)
router.get("/logout", logout)
router.post("/verify-otp", verifyOtp)

export default router