import { UserResponse } from "../types/user.type";
type RegisterInput = {
    email: string;
    password: string;
    fullname: string;
};
export declare class ConflictError extends Error {
    status: number;
    constructor(message: string);
}
export declare class UnauthorizedError extends Error {
    status: number;
    constructor(message: string);
}
export declare const register: (input: RegisterInput) => Promise<UserResponse>;
export declare const login: ({ email, password, }: {
    email: string;
    password: string;
}) => Promise<UserResponse>;
export {};
//# sourceMappingURL=auth.service.d.ts.map