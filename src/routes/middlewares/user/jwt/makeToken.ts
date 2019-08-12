import { NextFunction, Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';

import User from '../../../../../database/models/user.model';
import jwtSecret from '.././../../../../config/jwt';

const makeToken =  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({
        where: { 
            userId: req.body.userId
        }
    });
    
    const token: string  = jwt.sign({
            uid: user.id,
            userName: user.nickName
        }, jwtSecret, {
            expiresIn: '7d'
        });

    res.json({
        success: true,
        token
    });
}

export default makeToken