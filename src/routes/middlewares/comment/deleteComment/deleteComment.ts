import { NextFunction, Request, Response } from 'express';

import CustomError from '../../error/customError';

import Feed from '../../../../../database/models/feed.model';

import Comment from '../../../../../database/models/comment.model';

const DeleteComment = async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    try{

        const feed = await Feed.findOne({
            where: {
                id: req.params.id
            },
            include: [
                { model: Comment,
                    where: {
                        id: req.query.comment_id,
                        user_id: user.uid
                    }
                }
            ]
        });

        await feed.comment[0].destroy();
        
        res.json({
            success: true,
            error: false
        })

    } catch(error) {
        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
    }

};

export default DeleteComment;