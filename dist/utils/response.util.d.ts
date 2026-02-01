import { Response } from "express";
export declare const sendSuccess: <T>(res: Response, data: T, message: string, status?: number) => void;
export declare const sendCreated: <T>(res: Response, data: T, message: string, status?: number) => void;
export declare const sendBadRequest: <T>(res: Response, message: string, data?: T, status?: number) => void;
export declare const sendServerError: <T>(res: Response, message: string, data?: T, status?: number) => void;
//# sourceMappingURL=response.util.d.ts.map