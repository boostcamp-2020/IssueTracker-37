const { DataTypes, Model } = require('sequelize');

class Milestone extends Model {
  static initialize(sequelize) {
    super.init(
      {
        title: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        due_date: {
          type: DataTypes.DATE,
          allowNull: true,
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

  static async updateMilestoneById(payload) {
    const updatedMilestone = await this.update(payload, {
      where: { id: payload.id },
    });

    return updatedMilestone;
  }

  static async insert(payload) {
    const milestone = this.create(payload);

    return milestone;
  }

  static async getMilestones(issueModel) {
    const milestones = await this.findAll({
      include: [
        {
          model: issueModel,
          attributes: ['id', 'state'],
        },
      ],
    });

    return milestones;
  }

  static async deleteMilestoneById(id) {
    const isDeleted = await this.destroy({ where: { id } });

    return isDeleted;
  }
}

module.exports = Milestone;
