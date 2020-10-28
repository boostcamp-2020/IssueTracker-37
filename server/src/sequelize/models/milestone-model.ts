import { DataTypes } from 'sequelize';

module.exports = (sequelize: any) => {
  sequelize.define('milestone', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defalutValue: true,
    },
  });
};
