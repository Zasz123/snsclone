const { Router } = require('express');

const router = Router();

const makeHomeRouter = require('./homeMiddleWares/makeHome/makeHome');
const showHomeList = require('./homeMiddleWares/showHome/showHome');

router.use('/', makeHomeRouter);

router.use('/', showHomeList);

module.exports = router;