"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = exports.UnauthorizedError = exports.ConflictError = void 0;
// Tạo mảng user để kiểm tra trùng lặp thông tin trước khi đăng ký
const users = [
    {
        id: 1,
        email: "admin@gmail.com",
        password: "123456",
        fullname: "administrator",
        createdAt: new Date(),
    },
];
class ConflictError extends Error {
    status = 409;
    constructor(message) {
        super(message);
    }
}
exports.ConflictError = ConflictError;
class UnauthorizedError extends Error {
    status = 401;
    constructor(message) {
        super(message);
    }
}
exports.UnauthorizedError = UnauthorizedError;
const register = async (input) => {
    const { email, password, fullname } = input;
    // Kiểm tra email đã tồn tại
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        throw new ConflictError("Email đã tồn tại");
    }
    // Tạo user mới
    const newUser = {
        id: users.length + 1,
        email,
        password,
        fullname,
        createdAt: new Date(),
    };
    users.push(newUser);
    // Loại bỏ mật khẩu khi trả dữ liệu cho client
    const userNoPassword = {
        id: newUser.id,
        email: newUser.email,
        fullname: newUser.fullname,
        createdAt: newUser.createdAt,
    };
    return userNoPassword;
};
exports.register = register;
const login = async ({ email, password, }) => {
    const existingUser = users.find((user) => user.email === email);
    // Kiểm tra email đã tồn tại
    if (!existingUser) {
        throw new UnauthorizedError("Email hoặc mật khẩu không đúng");
    }
    if (existingUser.password !== password) {
        throw new UnauthorizedError("Email hoặc mật khẩu không đúng");
    }
    // Loại bỏ mật khẩu khi trả dữ liệu cho client
    return {
        id: existingUser.id,
        email: existingUser.email,
        fullname: existingUser.fullname,
        createdAt: existingUser.createdAt,
    };
};
exports.login = login;
//# sourceMappingURL=auth.service.js.map