import { DataTypes } from 'sequelize';

module.exports = (sequelize: any) => {
  sequelize.define('user', {
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    provider: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defalutValue: 'local',
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    profile: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
  });
};
