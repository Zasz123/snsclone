const { Router } = require('express');

const router = Router();

const addFeedHeartRouter = require('./heartMiddleWares/addFeedHeart/add');
const addComHeartRouter = require('./heartMiddleWares/addComHeart/addCom');

router.use('/f', addFeedHeartRouter);

router.use('/c', addComHeartRouter);

module.exports = router;
