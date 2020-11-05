const { DataTypes, Model } = require('sequelize');
const labelModel = require('@models/label-model');
const userModel = require('@models/user-model');
const commentModel = require('@models/comment-model');
const milestoneModel = require('@models/milestone-model');
const assigneeModel = require('@models/assignee-model');

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

  static async getIssues() {
    const issues = await this.findAll({
      include: [
        {
          model: commentModel,
          include: [
            {
              model: userModel,
              attributes: {
                exclude: ['password'],
              },
            },
          ],
        },
        {
          model: assigneeModel,
          include: [
            {
              model: userModel,
              attributes: {
                exclude: ['password'],
              },
            },
          ],
        },
        {
          model: userModel,
        },
        {
          model: labelModel,
        },
        {
          model: milestoneModel,
        },
      ],
    });

    return issues;
  }

  static async selectById(id, Label) {
    let findIssue = null;

    if (Label) {
      findIssue = await this.findByPk(id, {
        include: [
          {
            model: Label,
          },
        ],
      });
    }
    if (!Label) {
      findIssue = await this.findByPk(id);
    }

    if (!findIssue) throw new Error();
    return findIssue;
  }

  static async updateIssueByMilestone(payload) {
    await this.update(
      {
        milestone_id: payload.milestone_id,
      },
      {
        where: { id: payload.issue_id },
      },
    );
  }

  static async deleteIssueByLabel(payload) {
    const issue = await this.findOne({
      where: {
        id: payload.issue_id,
      },
    });

    await issue.removeLabels(payload.label_id);
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
  }

  static async deleteMilestoneByIssue(payload) {
    const isIssued = await this.findOne({ where: payload });

    if (!isIssued) throw new Error();

    const [isDeleted] = await this.update(
      { milestone_id: null },
      { where: payload },
    );

    if (!isDeleted) throw new Error();

    return isDeleted;
  }

  static async insertAssigneeByIssue(payload) {
    const result = await this.findByPk(payload.issue_id);

    await result.addUser(payload.assignee_id);

    return result;
  }

  static async insert(payload) {
    const insertIssue = await this.create(payload);

    return insertIssue;
  }

  static async deleteById(id) {
    const result = await this.destroy({ where: { id } });

    if (result) return result;
    else throw new Error();
  }
}

module.exports = Issue;
