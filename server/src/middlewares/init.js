const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const dotenv = require('dotenv');
const apiRouter = require('@api/index');

dotenv.config();

const initMiddlewares = (app) => {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
  app.use('/api', apiRouter);
};

module.exports = initMiddlewares;
