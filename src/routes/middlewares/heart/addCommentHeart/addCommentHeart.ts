import { NextFunction, Request, Response } from 'express';

import CustomError from '../../error/customError';

import sequelize from '../../../../../database/connection';

import Comment from '../../../../../database/models/comment.model';
import CommentHeart from '../../../../../database/models/comHeart.model';

const AddCommentHeart = async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    try{

        await CommentHeart.create({
            comment_id: req.params.id,
            user_id: user.uid
        });

        await Comment.update({
            heart: sequelize.literal('heart + 1')
        }, {
            where: {
                id: req.params.id
            }
        });

        res.json({
            success: true,
            error: false
        })

    } catch(error) {
        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
    }
}

export default AddCommentHeart;