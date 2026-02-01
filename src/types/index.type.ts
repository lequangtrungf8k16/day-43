// Thông tin user sau khi xác thực
declare module "express" {
  export interface Request {
    userId?: number;
  }
}
