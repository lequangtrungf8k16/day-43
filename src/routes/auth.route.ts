import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { loginSchema, registerSchema } from "../schemas/auth.schema";
import * as authController from "../controllers/auth.controller";

const authRouter = Router();

// Xử lý đăng ký tài khoản
authRouter.post(
  "/register",
  validate(registerSchema),
  authController.registerController,
);

// Xử lý đăng nhập tài khoản
authRouter.post(
  "/login",
  validate(loginSchema),
  authController.loginController,
);

export default authRouter;
