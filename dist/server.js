"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const PORT = 3000;
const server = (0, express_1.default)();
server.use(express_1.default.json());
// Route mặc định
server.get("/", (req, res) => {
    res.send("Hello Express TypeScript");
});
// Xử lý xác thực routes
server.use("/api/auth", auth_route_1.default);
// Xử lý route không tồn tại
server.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route không tồn tại",
    });
});
// Khởi động server
server.listen(PORT, () => {
    console.log(`Start server: http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map