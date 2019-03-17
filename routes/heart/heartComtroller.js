const { Router } = require('express');

const router = Router();

const addFeedHeartRouter = require('./heartMiddleWares/addFeedHeart/add');
const addComHeartRouter = require('./heartMiddleWares/addComHeart/addCom');

router.use('/feeds', addFeedHeartRouter);

router.use('/comments', addComHeartRouter);

module.exports = router;
