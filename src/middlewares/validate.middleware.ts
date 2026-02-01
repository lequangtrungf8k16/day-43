import { Request, Response, NextFunction } from "express";
import { ZodObject, ZodError } from "zod";
import { sendBadRequest } from "../utils/response.util";

export const validate =
  (schema: ZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Kiểm tra dữ liệu request
      await schema.parseAsync(req.body);
      // Dữ liệu hợp lệ cho request đi tiếp
      return next();
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const errorDetails = error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));

        return sendBadRequest(res, "Dữ liệu không hợp lệ", errorDetails);
      }

      return sendBadRequest(res, "Lỗi xác thực dữ liệu");
    }
  };
