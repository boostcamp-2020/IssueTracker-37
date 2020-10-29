import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const { JWT_SECRET_KEY }: any = process.env;

const loginAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    passport.authenticate('local', (error, user, { message } = '') => {
      if (error || !user)
        return res.status(400).json({ state: 'fail', message });

      const payload = { no: user.no, id: user.user_id };
      const generateJWTToken = jwt.sign(payload, JWT_SECRET_KEY);

      return res.json({ state: 'success', data: { JWT: generateJWTToken } });
    })(req, res, next);
  } catch (err) {
    next(err);
  }
};

export default loginAuth;
