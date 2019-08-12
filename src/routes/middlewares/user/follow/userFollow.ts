import { NextFunction, Request, Response} from 'express';

import CustomError from '../../error/customError';

import Follow from '../../../../../database/models/follow.model';

const UserFollow = (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    try{

        Follow.create({
            followed_id: req.params.id,
            follower_id: user.uid
        });


        
    } catch(error) {
        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
    }

    console.log('팔로우 성공');
    res.json({
        success: true,
        error: false
    });
    
}

export default UserFollow;