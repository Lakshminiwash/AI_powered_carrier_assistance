import { Router } from "express";
import { loginSchema, registerSchema, validateAuth } from "../validators/authValidator.js";
import { getMe, Login, logOut, Register } from "../controllers/authControllers.js";
import { authenticateUser } from "../middlewares/authMiddleWare.js";

const router = Router();

// for create acc
// api/auth/register
router.post("/register",validateAuth(registerSchema),Register);

// for login 
// api/auth/login
router.post("/login",validateAuth(loginSchema),Login)

// for current logged in user
// api/auth/getme
router.get("/getMe",authenticateUser,getMe)

// for logout 
// api/auth/logout 
router.post("/logOut",authenticateUser,logOut)

export default router;