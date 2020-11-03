const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
