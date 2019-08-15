import { Router } from 'express';

const router = Router();

import AddFeedHeart from '../middlewares/heart/addFeedHeart/addFeedHeart';
import AddCommentHeart from '../middlewares/heart/addCommentHeart/addCommentHeart'


router.post('/feeds', AddFeedHeart);

router.post('/comments', AddCommentHeart);

export default router;