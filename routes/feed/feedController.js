const { Router } = require('express');

const router = Router();

const deleteFeedRouter = require('./feedMiddleWares/deleteFeed/deleteFeed');
const makeFeedRouter = require('./feedMiddleWares/makeFeed/makeFeed');
const titleSearchRouter = require('./feedMiddleWares/searchFeed/searchTitle');
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
router.use('/insert', makeFeedRouter);

// search title router
router.use('/search/t', titleSearchRouter);

// search writer router
router.use('/search/w', writerSearchRouter);

// show list router
router.use('/show', showListRouter);

// show feed router
router.use('/tkd', showFeedRouter);

// update feed router
router.use('/update', updateFeedRouter);

// user feed router
router.use('/pro', userFeedRouter);


router.use('/one', testone);
router.use('/two', testtwo);

module.exports = router;
