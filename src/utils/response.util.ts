import { Response } from "express";

// Gửi response thành công
export const sendSuccess = <T>(
  res: Response,
  data: T,
  message: string,
  status: number = 200,
) => {
  res.status(status).json({ data, message, success: true });
};

// Gửi response tạo mới thành công
export const sendCreated = <T>(
  res: Response,
  data: T,
  message: string,
  status: number = 201,
) => {
  res.status(status).json({ data, message, success: true });
};

// Gửi response lỗi request không hợp lệ
export const sendBadRequest = <T>(
  res: Response,
  message: string,
  data?: T,
  status: number = 400,
) => {
  res.status(status).json({ message, data, success: false });
};

// Gửi response lỗi server
export const sendServerError = <T>(
  res: Response,
  message: string,
  data?: T,
  status: number = 500,
) => {
  res.status(status).json({ message, data, success: false });
};
