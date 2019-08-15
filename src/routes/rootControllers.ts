import { Router } from 'express';

const router = Router();

// User Controller
import UserController from './controllers/user.controller';

// Feed Controller
import FeedController from './controllers/feed.controller';

// Comment Controller
import CommentComtroller from './controllers/comment.controller';

// Heart controller
import HeartController from './controllers/heart.controller';


router.use('/users', UserController);

router.use('/feeds', FeedController);

router.use('/comments', CommentComtroller);

router.use('/hearts', HeartController);

export default router;