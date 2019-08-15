import { NextFunction, Request, Response } from 'express';

import CustomError from '../../error/customError';

import Feed from '../../../../../database/models/feed.model';
import FeedHeart from '../../../../../database/models/feedHeart.model';
import FeedImage from '../../../../../database/models/feedImage.model';

import Comment from '../../../../../database/models/comment.model';
import CommentHeart from '../../../../../database/models/comHeart.model';

import User from '../../../../../database/models/user.model';

const ShowFeed = async (req: Request, res: Response, next: NextFunction) => {

    try{

        const feed = await Feed.findOne({
            where: { id: req.params.id },
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

        const comment = await Comment.findAll({
            where: { feed_id: req.params.id },
            attributes: ['commentContents', 'heart', 'createdAt'],
            include: [
                { model: User,
                    attributes: ['nickName', 'realName', 'profile']
                },

                { model: CommentHeart,
                    attributes: ['user_id'],
                    include: [
                        { model: User,
                            attributes: ['nickName', 'realName', 'profile']
                        }
                    ]
                }
            ]
        })
        
        res.json({
            feed,
            comment
        })

    } catch(error) {
        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
    }
}

export default ShowFeed;