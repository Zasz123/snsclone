import { NextFunction, Request, Response } from 'express';

import CustomError from '../../error/customError';

import User from '../../../../../database/models/user.model';

const MyInfo = async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    try{

        const Info = await User.findOne({
            where: {
                id: user.uid
            }
        });

        res.json({
            Info
        });

    } catch(error) {

        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
        
    }
}

export default MyInfo;