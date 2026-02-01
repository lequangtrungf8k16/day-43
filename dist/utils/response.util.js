"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendServerError = exports.sendBadRequest = exports.sendCreated = exports.sendSuccess = void 0;
// Gửi response thành công
const sendSuccess = (res, data, message, status = 200) => {
    res.status(status).json({ data, message, success: true });
};
exports.sendSuccess = sendSuccess;
// Gửi response tạo mới thành công
const sendCreated = (res, data, message, status = 201) => {
    res.status(status).json({ data, message, success: true });
};
exports.sendCreated = sendCreated;
// Gửi response lỗi request không hợp lệ
const sendBadRequest = (res, message, data, status = 400) => {
    res.status(status).json({ message, data, success: false });
};
exports.sendBadRequest = sendBadRequest;
// Gửi response lỗi server
const sendServerError = (res, message, data, status = 500) => {
    res.status(status).json({ message, data, success: false });
};
exports.sendServerError = sendServerError;
//# sourceMappingURL=response.util.js.map