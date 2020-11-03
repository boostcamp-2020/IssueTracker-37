const { GitHubStrategy } = require('passport-github').Strategy;

const { models } = require('@sequelize/index');

const GitHubConfig = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL,
};

const GitHubCallback = async (accessToken, refreshToken, profile, done) => {
  const {
    _json: { email, name },
  } = profile;

  try {
    const result = await models.user.findOrCreate({
      where: { email, name },
    });

    return done(null, result[0]);
  } catch (error) {
    return done(error);
  }
};

const github = new GitHubStrategy(GitHubConfig, GitHubCallback);

module.exports = github;
