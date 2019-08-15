import { Router } from 'express';

const router = Router();

// Token MiddleWares
import VerifyToken from '../middlewares/user/jwt/verifyToken';

// Multer MiddleWares
import FeedMulter from '../middlewares/feed/makeFeed/feedMulter';

// Feed MiddleWares
import DeleteFeed from '../middlewares/feed/deleteFeed/deleteFeed';
import MakeFeed from '../middlewares/feed/makeFeed/makeFeed';
import SearchFeed from '../middlewares/feed/searchFeed/searchFeed';
import ShowFeed from '../middlewares/feed/showFeed/ShowFeed';
import ShowList from '../middlewares/feed/showFeedList/FeedList';
import UpdateFeed from '../middlewares/feed/updateFeed/UpdateFeed';
import UserFeed from '../middlewares/feed/userFeed/UserFeed';

// Multer
router.post('/', FeedMulter);

// query 값은 nickName
router.get('/writer', SearchFeed);

router.get('/', ShowFeed);
router.get('/list', ShowList);
router.get('/profile', UserFeed);

// Feed
router.post('/', VerifyToken, MakeFeed);
router.delete('/delete/:id', VerifyToken, DeleteFeed);

router.patch('/updater', VerifyToken, UpdateFeed);


export default router;