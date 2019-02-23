const { Router } = require('express');

const router = Router();

const signupRouter = require('./userMiddleWares/signup/userSignup');
const loginRouter = require('./userMiddleWares/login/userLogin');
const plusInfoRouter = require('./userMiddleWares/plusinfo/plus');
const myInfoRouter = require('./userMiddleWares/myInfo/info');

// signup router
router.use('/', signupRouter);

// login router
router.use('/login', loginRouter);

// plus info router
router.use('/plus', plusInfoRouter);

// my Info router
router.use('/my', myInfoRouter);

module.exports = router;
