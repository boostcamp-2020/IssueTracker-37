require('dotenv').config('../../.env');

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
const MYSQL = 'mysql';

const config = {
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

module.exports = config;
