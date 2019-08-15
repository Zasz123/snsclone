import { NextFunction, Request, Response } from 'express';

import CustomError from '../../error/customError';

import Feed from '../../../../../database/models/feed.model';
import FeedHeart from '../../../../../database/models/feedHeart.model';
import FeedImage from '../../../../../database/models/feedImage.model';


import User from '../../../../../database/models/user.model';

import Follow from '../../../../../database/models/follow.model';
const UserFeed = async (req: Request, res: Response, next: NextFunction) => {

    try{

        const feeds = await Feed.findAll({
            order: [['createdAt','DESC']],
            attributes: ['feedContents', 'heart', 'createdAt'],
            include: [
                { model: FeedHeart,
                    attributes: ['user_id'],
                    include: [
                        { model: User,
                            attributes: ['nickName', 'realName', 'profile']
                        }
                    ]
                },

                { model: FeedImage,
                    attributes: ['feedImage']
                }
            ]
        });

        const follower = await Follow.findAll({
            where: {
                followed_id: req.params.id
            },
            attributes: ['follower_id'],
            include: [
                { model: User,
                    attributes: ['nickName', 'realName', 'profile']
                }
            ]
        });

        const users = await User.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['nickName', 'realName', 'profile']
        });

        res.json({
            users,
            follower,
            feeds
        })

    } catch(error) {
        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
    }

}

export default UserFeed;