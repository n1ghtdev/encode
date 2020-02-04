const express = require('express');
const ApiRouter = require('./apiRoute');

const router = express.Router();

router.use('/api', ApiRouter);

module.exports = router;
