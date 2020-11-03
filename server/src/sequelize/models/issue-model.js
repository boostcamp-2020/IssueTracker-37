const { DataTypes, Model } = require('sequelize');
const labelModel = require('@models/label-model');
const userModel = require('@models/user-model');
const commentModel = require('@models/comment-model');
const milestoneModel = require('@models/milestone-model');

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
        },
        {
          model: userModel,
          attributes: ['id', 'name'],
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

  static async updateIssueByMilestone(payload){

    await this.update({
      milestone_id: payload.milestone_id}, {
      where: {id: payload.issue_id}
    });

  }

  static async deleteIssueByLabel(payload){
    
    const issue = await this.findOne({
      where: {
        id: payload.issue_id
      }
    });

    await issue.removeLabels(payload.label_id);
  }

}

module.exports = Issue;
