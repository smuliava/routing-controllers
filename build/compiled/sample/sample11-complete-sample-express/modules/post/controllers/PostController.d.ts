import { Request } from "express";
export declare class PostController {
    getAll(): Promise<any>;
    getOne(): Promise<any>;
    post(request: Request): Promise<any>;
    put(request: Request): Promise<any>;
    patch(request: Request): Promise<any>;
    remove(request: Request): Promise<any>;
    private createPromise;
}
