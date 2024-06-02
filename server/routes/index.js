const express = require('express');
const {userRouter} = require('./user');
const {problemRouter} = require('./problems');

const router = express.Router();
router.use("/user", userRouter);
router.use("/problem", problemRouter);
module.exports = {router};