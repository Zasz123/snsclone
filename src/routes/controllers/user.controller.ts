import { Router } from 'express';

const router = Router();

// Token MiddleWares
import MakeToken from '../middlewares/user/jwt/makeToken';
import VerifyToken from '../middlewares/user/jwt/verifyToken';

// User MiddleWares
import UserSignup from '../middlewares/user/signup/userSignup';
import UserLogin from '../middlewares/user/login/userLogin';
import UserInfo from '../middlewares/user/myinfo/myInfo';

// User
router.post('/', UserSignup);
router.post('/login', UserLogin, MakeToken);
router.post('/my', VerifyToken, UserInfo);

export default router;