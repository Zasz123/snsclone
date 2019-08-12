import { NextFunction, Request, Response } from 'express'

import CustomError from '../../error/customError';

import * as jwt from 'jsonwebtoken';
import jwtSecret from '../../../../../config/jwt';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.body.token;
    console.log(jwtSecret)
    try{

        const decoded = jwt.verify(token, jwtSecret);
        res.locals.user = decoded
        next();

    } catch(error) {

        console.log(error);
        switch( error.name ) {
            case 'JsonWebTokenError':
                next(new CustomError({ name: 'Wrong_Request' }));
                break;
            default:
                next(new CustomError({ name: 'Unhandled_Error' }));
                break;
        }
        
    }
};

export default verifyToken;