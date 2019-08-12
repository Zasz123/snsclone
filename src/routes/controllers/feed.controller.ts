import { Router } from 'express';

const router = Router();

// Token MiddleWares
import VerifyToken from '../middlewares/user/jwt/verifyToken';

// Feed MiddleWares
import MakeFeed from '../middlewares/feed/makeFeed/makeFeed';

import FeedMulter from '../middlewares/feed/makeFeed/feedMulter';

router.post('/', FeedMulter);

router.post('/', VerifyToken, MakeFeed);

// router.post('/d', FeedMulter);

export default router;