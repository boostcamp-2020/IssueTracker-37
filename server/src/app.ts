import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import apiRouter from "./api/index";

require("dotenv").config();

const app: express.Application = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} 에서 실행중.`);
});
