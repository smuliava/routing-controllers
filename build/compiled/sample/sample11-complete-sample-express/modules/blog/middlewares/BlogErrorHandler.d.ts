import { ExpressErrorMiddlewareInterface } from "../../../../../src/driver/express/ExpressErrorMiddlewareInterface";
export declare class BlogErrorHandler implements ExpressErrorMiddlewareInterface {
    error(error: any, request: any, response: any, next?: Function): void;
}
