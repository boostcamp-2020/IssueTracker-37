import { Sequelize } from 'sequelize';
import config from './config/config';
import applyExtraSetup from './extra-setup';

const env: string = process.env.NODE_ENV || 'development';
const option: object = config[env];

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

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

applyExtraSetup(sequelize);

export default sequelize;
