import { NextFunction, Request, Response} from 'express';

import CustomError from '../../error/customError';

import User from '../../../../../database/models/user.model';

const UserSignup = (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.body.userId;
    const userPw: string = req.body.userPw;
    const nickName: string = req.body.nickName;
    const realName: string = req.body.realName;

    User.create({
        userId: userId,
        userPw: userPw,
        nickName: nickName,
        realName: realName
    }).then(() => {
        res.json({
            success: true,
            error: false
        });
    }).catch((err) => {
        console.log(err);
    })
    
};

export default UserSignup
