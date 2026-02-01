"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = require("zod");
const response_util_1 = require("../utils/response.util");
const validate = (schema) => async (req, res, next) => {
    try {
        // Kiểm tra dữ liệu request
        await schema.parseAsync(req.body);
        // Dữ liệu hợp lệ cho request đi tiếp
        return next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            const errorDetails = error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            }));
            return (0, response_util_1.sendBadRequest)(res, "Dữ liệu không hợp lệ", errorDetails);
        }
        return (0, response_util_1.sendBadRequest)(res, "Lỗi xác thực dữ liệu");
    }
};
exports.validate = validate;
//# sourceMappingURL=validate.middleware.js.map