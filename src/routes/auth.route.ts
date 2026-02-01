import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { loginSchema, registerSchema } from "../schemas/auth.schema";
import * as authController from "../controllers/auth.controller";

const router = Router();

// Xử lý đăng ký tài khoản
router.post(
  "/register",
  validate(registerSchema),
  authController.registerController,
);

// Xử lý đăng nhập tài khoản
router.post("/login", validate(loginSchema), authController.loginController);

export default router;
