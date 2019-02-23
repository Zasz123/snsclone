const { Router } = require('express');

const router = Router();

const addHeartRouter = require('./heartMiddleWares/addHeart/add');
const deleteHeartRouter = require('./heartMiddleWares/deleteHeart/delete');

router.use('/', addHeartRouter);

router.use('/delete', deleteHeartRouter);

module.exports = router;