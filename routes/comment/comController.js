const { Router } = require('express');

const router = Router();

const makeCommentRouter = require('./comMiddleWares/makeComment/make');

const deleteCommentRouter = require('./comMiddleWares/deleteComment/delete');

// make comment router
router.use('/', makeCommentRouter);

// delete comment router
router.use('/delete', deleteCommentRouter);

module.exports = router;
