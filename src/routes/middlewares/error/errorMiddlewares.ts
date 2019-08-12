import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import Errors from './errors';

interface DefinedErrorI {
    description: string,
    code: number;
    message: string;
}

const ErrorMiddleware: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    const error: DefinedErrorI = Errors[err.name];

    const name: string = err.name;
    const description: string = (error && error.description) || Errors.Unhandled_Error.description;
    const message: string = (error && error.message) || Errors.Unhandled_Error.message;
    const code: number = (error && error.code) || Errors.Unhandled_Error.code;

    res.status(code).json({
        success: false,
        code,
        name,
        message,
        description
    });
};

export default ErrorMiddleware;