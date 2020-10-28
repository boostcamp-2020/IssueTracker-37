import { DataTypes } from 'sequelize';

module.exports = (sequelize: any) => {
  sequelize.define('comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
