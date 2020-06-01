import { Request } from "express";
export declare class PostController {
    getAll(): {
        id: number;
        name: string;
    }[];
    getOne(): {
        id: number;
        name: string;
    };
    post(request: Request): string;
    put(request: Request): string;
    patch(request: Request): string;
    remove(request: Request): string;
}
