import { Router } from 'express';

const router = Router();

import VerifyToken from '../middlewares/user/jwt/verifyToken';

import DeleteComment from '../middlewares/comment/deleteComment/deleteComment';
import MakeComment from '../middlewares/comment/makeComment/makeComment';


router.post('/:id', VerifyToken, MakeComment);

// query 값은 comment_id
router.delete('/delete/:id', VerifyToken, DeleteComment);

export default router;