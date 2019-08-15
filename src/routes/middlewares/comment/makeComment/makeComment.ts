import { NextFunction, Request, Response } from 'express';

import CustomError from '../../error/customError';

import Comment from '../../../../../database/models/comment.model';

const MakeComment = async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    try{

        await Comment.create({
            feed_id: req.params.id,
            user_id: user.uid,
            commentContents: req.body.commentContents
        });

        res.json({
            success: true
        })

    } catch(error) {
        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
    }

}

export default MakeComment