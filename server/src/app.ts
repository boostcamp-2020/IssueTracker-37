import express from 'express';
import 'module-alias/register';

import sequelize from '@sequelize/index';
import initMiddlewares from '@middlewares/init';

const app: express.Application = express();
const { PORT } = process.env;

sequelize
  .sync({ force: false })
  .then(() => {
    initMiddlewares(app);
    app.listen(PORT);
  })
  .catch((error: any) => console.log(error));
