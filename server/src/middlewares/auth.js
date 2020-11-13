const passport = require('@passport');
const jwt = require('jsonwebtoken');

const { JWT_SECRET_KEY } = process.env;

const loginAuth = async (req, res, next) => {
  try {
    passport.authenticate('local', (error, user, { message } = '') => {
      if (error || !user)
        return res.status(400).json({ state: 'fail', message });

      const payload = { no: user.id, email: user.email };
      const generateJWTToken = jwt.sign(payload, JWT_SECRET_KEY);

      return res.json({
        state: 'success',
        data: { JWT: generateJWTToken, user },
      });
    })(req, res, next);
  } catch (err) {
    next(err);
  }
};

const apiAuth = async (req, res, next) => {
  try {
    passport.authenticate(
      'jwt',
      { session: false },
      (error, user, { message } = '') => {
        if (error || !user) {
          return res.status(400).json({ state: 'fail', message });
        }

        req.body.user_no = user.id;
        next();
      },
    )(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginAuth,
  apiAuth,
};
