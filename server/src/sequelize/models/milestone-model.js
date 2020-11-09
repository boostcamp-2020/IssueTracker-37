const { DataTypes, Model } = require('sequelize');

class Milestone extends Model {
  static initialize(sequelize) {
    super.init(
      {
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
      },
      {
        modelName: 'Milestone',
        tableName: 'milestone',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }

  static async selectById(id) {
    const milestone = this.findOne({
      where: { id },
    });

    if (!milestone) throw new Error();
    return milestone;
  }

  static async deleteMilestoneById(id) {
    const isDeleted = await this.destroy({ where: { id } });

    return isDeleted;
  }
}

module.exports = Milestone;
