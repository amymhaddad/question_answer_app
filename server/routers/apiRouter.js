const express = require('express');
const router = express.Router();

const questionsRouter = require('./questionsRouter');
router.use('/questions', questionsRouter);

module.exports = router;
