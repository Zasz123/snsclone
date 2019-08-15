import { NextFunction, Request, Response } from 'express';

import CustomError from '../../error/customError';

import Feed from '../../../../../database/models/feed.model';
import FeedHeart from '../../../../../database/models/feedHeart.model';
import FeedImage from '../../../../../database/models/feedImage.model';

import User from '../../../../../database/models/user.model';


const FeedList = async (req: Request, res: Response, next: NextFunction) => {

    try{
        
        const feed = await Feed.findAll({
            order: [['createdAt', 'DESC']],
            attributes: ['feedContents', 'heart', 'createdAt'],
            include: [
                { model: User,
                    attributes: ['nickName', 'realName', 'profile']
                },

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

        res.json(feed);

    } catch(error) {
        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
    }
}

export default FeedList;