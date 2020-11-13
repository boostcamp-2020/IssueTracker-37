const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');
const { errorMessage } = require('@utils/server-message');
const userModel = require('@models/user-model');

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

const JWTVerify = async (payload, done) => {
  try {
    const { no, email } = payload;
    const user = await userModel.findOne({ where: { email, id: no } });

    if (user) return done(null, user);
    return done(null, false, { message: errorMessage.invalidToken });
  } catch (error) {
    return done(error);
  }
};

const jwt = new JWTStrategy(JWTConfig, JWTVerify);

module.exports = jwt;
