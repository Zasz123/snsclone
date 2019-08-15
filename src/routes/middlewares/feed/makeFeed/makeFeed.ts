import { NextFunction, Request, Response} from 'express';

import CustomError from '../../error/customError';

import Feed from '../../../../../database/models/feed.model';
import FeedImage from '../../../../../database/models/feedImage.model';

const MakeFeed = async (req: Request, res: Response, next: NextFunction) => {

    const user = res.locals.user;

    let file: Object = new Array();
    let files: string[] = new Array();

    if( req.files && req.files.length) {
    
        for(let i = 0; i < req.files.length; i++ ) {
            file[i] = req.files[i];
        }
    
        for(let i in file) {
            files.push('http://localhost:3000/static/' + file[i].filename);
        }

    } else {
        files = []
    }

    try{

        await Feed.create({
            user_id: user.uid,
            feedContents: req.body.feedContents,
            feedImage: files.map(feedImage => ({feedImage}))
        }, {
            include: [{model: FeedImage}]
        });

        res.json({
            success: true
    
        });
        
    } catch(error) {
        console.log(error);
        next(new CustomError({ name: 'Database_Error' }));
    }
}

export default MakeFeed;