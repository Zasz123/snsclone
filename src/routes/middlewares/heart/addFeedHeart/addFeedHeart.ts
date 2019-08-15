import { NextFunction, Request, Response } from 'express';

import CustomError from '../../error/customError';

import sequelize from '../../../../../database/connection';

import Feed from '../../../../../database/models/feed.model';
import FeedHeart from '../../../../../database/models/feedHeart.model';


const AddFeedHeart = async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    try{

        await FeedHeart.create({
            feed_id: req.params.id,
            user_id: user.uiod
        });

        await Feed.update({
            heart: sequelize.literal('heart + 1')
        }, {
            where: {
                id: req.params.id
            }
        });

        res.json({
            success: true,
            error: false
        });

    } catch(error) {
        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
    }
};

export default AddFeedHeart;