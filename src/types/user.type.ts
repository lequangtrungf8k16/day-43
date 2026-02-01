// Cấu trúc dữ liệu user
export type User = {
  id: number;
  email: string;
  password: string;
  fullname: string;
  createdAt: Date;
};

// Loại bỏ mật khẩu user khi trả về client
export type UserResponse = Omit<User, "password">;
