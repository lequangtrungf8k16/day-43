export type User = {
    id: number;
    email: string;
    password: string;
    fullname: string;
    createdAt: Date;
};
export type UserResponse = Omit<User, "password">;
//# sourceMappingURL=user.type.d.ts.map