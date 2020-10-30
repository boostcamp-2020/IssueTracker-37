import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github';

const { models } = require('../sequelize').default;

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      cb: Function,
    ) => {
      const {
        _json: { email, name },
      } = profile;

      try {
        const result = await models.user.findOrCreate({
          where: { email, name },
        });

        return cb(null, result[0]);
      } catch (error) {
        // TODO: error 처리 템플릿 지정 및 구현
        return cb(error);
      }
    },
  ),
);

export default passport;
