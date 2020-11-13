const axios = require('axios');

const { models } = require('@sequelize/index');

const getGitHubAccessToken = async (code) => {
  const getAccessTokenUrl = 'https://github.com/login/oauth/access_token';

  const data = {
    client_id: process.env.GITHUB_CLIENT_ID,

    client_secret: process.env.GITHUB_CLIENT_SECRET,

    code,
  };

  const config = {
    headers: {
      accept: 'application/json',
    },
  };

  try {
    const {
      data: { access_token: accessToken },
    } = await axios.post(getAccessTokenUrl, data, config);

    return accessToken;
  } catch (error) {
    throw error;
  }
};

const getGitHubProfile = async (accessToken) => {
  const getUserUrl = 'https://api.github.com/user';

  const config = {
    headers: {
      Authorization: `token ${accessToken}`,

      accept: 'application/json',
    },
  };

  try {
    const { data } = await axios.get(getUserUrl, config);

    console.log(data);

    return data.login;
  } catch (error) {
    throw error;
  }
};

const getGitHubEmail = async (accessToken) => {
  const getEmailsUrl = 'https://api.github.com/user/emails';

  const config = {
    headers: {
      Authorization: `token ${accessToken}`,

      accept: 'application/json',
    },
  };

  try {
    const { data } = await axios.get(getEmailsUrl, config);

    const { email } = data.filter((_email) => _email.primary)[0];

    return email;
  } catch (error) {
    throw error;
  }
};

const findOrCreateGitHubUser = async (name, email) => {
  const user = await models.User.findOrCreate({
    where: { email, name },

    defaults: { provider: 'github' },
  });

  return user[0];
};

module.exports = {
  getGitHubAccessToken,
  getGitHubProfile,
  getGitHubEmail,
  findOrCreateGitHubUser,
};
