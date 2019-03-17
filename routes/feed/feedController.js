const { Router } = require('express');

const router = Router();

const deleteFeedRouter = require('./feedMiddleWares/deleteFeed/deleteFeed');
const makeFeedRouter = require('./feedMiddleWares/makeFeed/makeFeed');
const writerSearchRouter = require('./feedMiddleWares/searchFeed/searchWriter');
const showListRouter = require('./feedMiddleWares/showList/showList');
const showFeedRouter = require('./feedMiddleWares/showPoster/tkd');
const updateFeedRouter = require('./feedMiddleWares/updateFeed/updateFeed');
const userFeedRouter = require('./feedMiddleWares/userFeed/users');

const testone = require('./feedMiddleWares/makeFeed/oneImage');
const testtwo = require('./feedMiddleWares/makeFeed/twoImage');

// delete router
router.use('/delete', deleteFeedRouter);

// make Feed router
router.use('/', makeFeedRouter);

// search writer router
router.use('/wrtier', writerSearchRouter);

// show list router
router.use('/list', showListRouter);

// show feed router
router.use('/', showFeedRouter);

// update feed router
router.use('/updater', updateFeedRouter);

// user feed router
router.use('/profile', userFeedRouter);


router.use('/one', testone);
router.use('/two', testtwo);

module.exports = router;
