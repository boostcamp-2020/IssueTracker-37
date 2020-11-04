const { Sequelize } = require('sequelize');
const config = require('./config/config');
const applyExtraSetup = require('./extra-setup');

const env = process.env.NODE_ENV || 'development';
const option = config[env];

const sequelize = new Sequelize({
  ...option,
  define: {
    underscored: true,
  },
});

const modelDefiners = [
  require('./models/issue-model'),
  require('./models/user-model'),
  require('./models/milestone-model'),
  require('./models/label-model'),
  require('./models/comment-model'),
];

modelDefiners.forEach((modelDefiner) => modelDefiner.initialize(sequelize));

applyExtraSetup(sequelize);

const models = sequelize.models;

module.exports = {
  sequelize,
  models,
};
