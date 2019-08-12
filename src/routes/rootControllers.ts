import { Router } from 'express';

const router = Router();

// User Controller
import userController from './controllers/user.controller';

// Feed Controller
import feedController from './controllers/feed.controller';

router.use('/users', userController);

router.use('/feeds', feedController);

export default router;