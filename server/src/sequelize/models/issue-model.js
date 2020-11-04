const { DataTypes, Model } = require('sequelize');

class Issue extends Model {
  static initialize(sequelize) {
    super.init(
      {
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
      },
      {
        modelName: 'Issue',
        tableName: 'issue',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
  
  static async selectById(id, Label) {
    const findIssue = await this.findByPk(id, {
      include: [
        {
          model: Label,
        },
      ],
    });

    if (!findIssue) throw new Error();
    return findIssue;
  }

  static async addIssueToLabel(payload) {
    const findIssue = await this.findByPk(payload.issueId);

    const result = await findIssue.addLabel(payload.labelId);

    return result;
  }

  static async removeAssignee(payload) {
    const findIssue = await this.findByPk(payload.issueId);

    const isDelete = await findIssue.removeUser(payload.assigneeId);

    if (!isDelete) throw new Error();

    return;
  }

  static async deleteMilestoneByIssue(payload) {
    const result = await this.destroy({ where: payload });

    if (!result) throw new Error();
    return result;
  }

  static async insertAssigneeByIssue(payload) {
    const result = await this.findByPk(payload.issue_id);

    await result.addUser(payload.assginee_id);

    return result;
  }
}

module.exports = Issue;
