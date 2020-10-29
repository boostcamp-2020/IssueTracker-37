const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { errorMessage } = require('../utils/server-message');
const { isComparedPassword } = require('../utils/bcrypt');

const { models } = require('../sequelize').default;

const passportConfig = { usernameField: 'email', passwordField: 'password' };

const passportAuth = async (email: string, password: string, done: any) => {
  try {
    const user = await models.user.findOne({ where: { email } });

    if (!user) return done(null, false, { message: errorMessage.invalidUser });
    if (isComparedPassword(password, user.password)) return done(null, user);

    return done(null, false, { message: errorMessage.invalidPassword });
  } catch (err) {
    return done(err);
  }
};

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

const JWTVerify = async (payload: any, done: any) => {
  try {
    const user = await models.user.findOne({ where: { user_id: payload.id } });

    if (user) return done(null, user);
    return done(null, false, { message: errorMessage.invalidToken });
  } catch (error) {
    return done(error);
  }
};

passport.use('local', new LocalStrategy(passportConfig, passportAuth));
passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));

module.exports = passport;
