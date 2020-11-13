const express = require('express');

require('module-alias/register');

const { sequelize } = require('@sequelize');
const initMiddlewares = require('@middlewares/init');

const app = express();
const { PORT } = process.env;

sequelize
  .sync({ force: false })
  .then(() => {
    initMiddlewares(app);
    app.listen(PORT);
  })
  .catch((error) => console.log(error));
