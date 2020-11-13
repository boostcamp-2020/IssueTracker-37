const passport = require('passport');

const local = require('@passport/local');
const jwt = require('@passport/jwt');

passport.use('local', local);
passport.use('jwt', jwt);

module.exports = passport;
