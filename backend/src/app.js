import cookieParser from "cookie-parser";
import express from "express"
import authRouter from "./routes/authRoutes.js"
import errorHandler from "./middlewares/globalErrorHandler.js";

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth/",authRouter)

app.use(errorHandler)

export default app;