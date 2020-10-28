require('dotenv').config('../../.env');

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
const MYSQL: string = 'mysql';

const config: any = {
  development: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: MYSQL_HOST,
    dialect: MYSQL,
  },
  production: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: MYSQL_HOST,
    dialect: MYSQL,
  },
};

export default config;
