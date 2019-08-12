import { NextFunction, Request, Response} from 'express';

import CustomError from '../../error/customError';
import User from '../../../../../database/models/user.model';

const userLogin = async(req: Request, res: Response, next: NextFunction) => {
    
    const user = await User.findOne({
        where: {
            userId: req.body.userId
        }
    });
    
    if(user.userPw === req.body.userPw) {
        next();
    } else {
        next(new CustomError({ name: 'Not_User', message: '비밀번호를 잘못 입력하셧습니다.' }))
    }
}

export default userLogin;