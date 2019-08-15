import { NextFunction, Request, Response } from 'express';

import CustomError from '../../error/customError';

import Feed from '../../../../../database/models/feed.model';

const deleteFeed = async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    try {

        const feed = await Feed.findOne({
            where: {
                id: req.params.id
            }
        })

        if(feed.user_id === user.uid) {

            await Feed.destroy({
                where: {
                    id: req.params.id
                }
            });

            res.json({
                success: true,
                error: false
            })

        } else {
            next(new CustomError({ name: 'Wrong_Request' }));
        }
    } catch(error) {
        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
    }
}

export default deleteFeed;