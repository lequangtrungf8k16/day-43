import { Request, Response } from "express";
import {
  ConflictError,
  UnauthorizedError,
  login,
  register,
} from "../services/auth.service";

export const registerController = async (req: Request, res: Response) => {
  try {
    const registerSuccess = await register(req.body);

    return res.status(201).json({
      success: true,
      message: "Đăng ký tài khoản thành công",
      data: registerSuccess,
    });
  } catch (error: unknown) {
    // Kiểm tra lỗi Email đã tồn tại
    if (error instanceof ConflictError) {
      return res.status(409).json({
        success: false,
        message: error.message,
        data: null,
      });
    }

    // Kiểm tra lỗi server
    return res.status(500).json({
      success: false,
      message: "Lỗi server",
      data: null,
    });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const loginSuccess = await login(req.body);

    return res.status(200).json({
      success: true,
      message: "Đăng nhập thành công",
      data: loginSuccess,
    });
  } catch (error: unknown) {
    // Kiểm tra lỗi xác thực Email và mật khẩu
    if (error instanceof UnauthorizedError) {
      return res.status(401).json({
        success: false,
        message: error.message,
        data: null,
      });
    }

    // Kiểm tra lỗi server
    return res.status(500).json({
      success: false,
      message: "Lỗi server",
      data: null,
    });
  }
};
