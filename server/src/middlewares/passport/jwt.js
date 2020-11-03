const { JWTStrategy, ExtractJwt } = require('passport-jwt').Strategy;
const { errorMessage } = require('@utils/server-message');
const { models } = require('@sequelize/index');

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

const JWTVerify = async (payload, done) => {
  try {
    const user = await models.user.findOne({ where: { user_id: payload.id } });

    if (user) return done(null, user);
    return done(null, false, { message: errorMessage.invalidToken });
  } catch (error) {
    return done(error);
  }
};

const jwt = new JWTStrategy(JWTConfig, JWTVerify);

module.exports = jwt;
