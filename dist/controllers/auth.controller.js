"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.registerController = void 0;
const auth_service_1 = require("../services/auth.service");
const registerController = async (req, res) => {
    try {
        const registerSuccess = await (0, auth_service_1.register)(req.body);
        return res.status(201).json({
            success: true,
            message: "Đăng ký tài khoản thành công",
            data: registerSuccess,
        });
    }
    catch (error) {
        // Kiểm tra lỗi Email đã tồn tại
        if (error instanceof auth_service_1.ConflictError) {
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
exports.registerController = registerController;
const loginController = async (req, res) => {
    try {
        const loginSuccess = await (0, auth_service_1.login)(req.body);
        return res.status(200).json({
            success: true,
            message: "Đăng nhập thành công",
            data: loginSuccess,
        });
    }
    catch (error) {
        // Kiểm tra lỗi xác thực Email và mật khẩu
        if (error instanceof auth_service_1.UnauthorizedError) {
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
exports.loginController = loginController;
//# sourceMappingURL=auth.controller.js.map