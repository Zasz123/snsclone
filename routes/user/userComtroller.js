const { Router } = require('express');

const router = Router();

const signupRouter = require('./userMiddleWares/signup/userSignup');
const loginRouter = require('./userMiddleWares/login/userLogin');
const plusInfoRouter = require('./userMiddleWares/plusinfo/plus');
const myInfoRouter = require('./userMiddleWares/myInfo/info');
const followRouter = require('./userMiddleWares/follow/follow');

// signup router
router.use('/', signupRouter);

// login router
router.use('/login', loginRouter);

// plus info router
router.use('/plus', plusInfoRouter);

// my Info router
router.use('/my', myInfoRouter);

// follow router
router.use('/follow', followRouter);

module.exports = router;
