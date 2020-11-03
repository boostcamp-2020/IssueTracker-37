const passport = require('passport');

const local = require('@passport/local');
const jwt = require('@passport/jwt');
const github = require('@passport/github');

passport.use('local', local);
passport.use('jwt', jwt);
passport.use('github', github);

module.exports = passport;
