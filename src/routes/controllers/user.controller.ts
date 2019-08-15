import { Router } from 'express';

const router = Router();

// Token MiddleWares
import MakeToken from '../middlewares/user/jwt/makeToken';
import VerifyToken from '../middlewares/user/jwt/verifyToken';

// Multer MiddleWares

import profileMulter from '../middlewares/user/update/profileMulter';

// User MiddleWares
import UserFollow from '../middlewares/user/follow/userFollow';
import UserLogin from '../middlewares/user/login/userLogin';
import UserInfo from '../middlewares/user/myinfo/myInfo';
import UserSignup from '../middlewares/user/signup/userSignup';
import UserPlus from '../middlewares/user/update/plusMyInfo';


// Multer
router.patch('/plus', profileMulter);

// User
router.post('/', UserSignup);
router.post('/login', UserLogin, MakeToken);
router.post('/follow/:id', VerifyToken, UserFollow);
router.post('/my', VerifyToken, UserInfo);
router.patch('/plus', VerifyToken, UserPlus);

export default router;