const { Strategy: LocalStrategy } = require('passport-local');

const { errorMessage } = require('@utils/server-message');
const userModel = require('@models/user-model');
const { isComparedPassword } = require('@utils/bcrypt');

const passportConfig = { usernameField: 'email', passwordField: 'password' };

const passportAuth = async (email, password, done) => {
  try {
    const user = await userModel.findOne({ where: { email } });

    if (!user) return done(null, false, { message: errorMessage.invalidUser });
    if (isComparedPassword(password, user.password)) return done(null, user);

    return done(null, false, { message: errorMessage.invalidPassword });
  } catch (err) {
    return done(err);
  }
};

const local = new LocalStrategy(passportConfig, passportAuth);

module.exports = local;
