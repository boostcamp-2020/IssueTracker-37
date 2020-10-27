const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("dotenv").config();

const app = express();
const apiRouter = require("./api/index");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} 에서 실행중.`);
});
