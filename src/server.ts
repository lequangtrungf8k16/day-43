import express, { Request, Response } from "express";
import router from "./routes";

const PORT: number = 3000;
const server = express();

server.use(express.json());

// Route mặc định
server.get("/", (req: Request, res: Response) => {
  res.send("Hello Express TypeScript");
});

// Xử lý xác thực routes
server.use("/api", router);

// Xử lý route không tồn tại
server.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route không tồn tại",
  });
});

// Khởi động server
server.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});
