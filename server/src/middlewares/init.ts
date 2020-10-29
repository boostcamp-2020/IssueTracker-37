import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import apiRouter from '../api/index';

dotenv.config();

const initMiddlewares = (app: express.Application) => {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use('/api', apiRouter);
};

export default initMiddlewares;
