const { Strategy: GitHubStrategy } = require('passport-github');
const request = require('request-promise');

const { models } = require('@sequelize/index');

const GitHubConfig = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL,
  scope: 'user:email',
};

const getGitHubEmail = async (accessToken) => {
  const emails = await request({
    url: 'https://api.github.com/user/emails',
    method: 'GET',
    json: true,
    headers: {
      'User-Agent': 'Mozilla/5.0',
      Authorization: `token ${accessToken}`,
    },
  });

  const { email } = emails.filter((_email) => _email.primary)[0];

  return email;
};

const GitHubCallback = async (accessToken, refreshToken, profile, done) => {
  const { username: name } = profile;
  const email = await getGitHubEmail(accessToken);

  try {
    const result = await models.User.findOrCreate({
      where: { email, name },
      defaults: { provider: 'github' },
    });

    return done(null, result[0]);
  } catch (error) {
    return done(error);
  }
};

const github = new GitHubStrategy(GitHubConfig, GitHubCallback);

module.exports = github;
