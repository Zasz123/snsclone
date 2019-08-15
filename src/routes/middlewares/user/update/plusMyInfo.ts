import { NextFunction, Request, Response } from 'express';

import CustomError from '../../error/customError';

import User from '../../../../../database/models/user.model';

const plusInfo = async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    try{

        await User.update({
            profile: 'http://localhost:3000/static/' + req.file.filename
        }, {
            where: {
                id: user.uid
            }
        });

        res.json({
            success: true,
            error: false
        });

    } catch (error) {
        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
    }
}

export default plusInfo;
