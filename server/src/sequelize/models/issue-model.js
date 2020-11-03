const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('issue', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defalutValue: true,
    },
  });
};
