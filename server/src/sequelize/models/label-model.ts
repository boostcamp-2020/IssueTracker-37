import { DataTypes } from 'sequelize';

module.exports = (sequelize: any) => {
  sequelize.define('label', {
    title: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  });
};
