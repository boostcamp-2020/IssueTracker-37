const issueModel = require('@models/issue-model');
const { models } = require('@sequelize');

class IssueService {
  async findOneWithLabel(id) {
    const issue = await issueModel.selectById(id, models.Label);

    return issue;
  }

  async createIssueToLabel(payload) {
    const issueToLabel = await issueModel.addIssueToLabels(payload);

    return issueToLabel;
  }

  async deleteAssignee(payload) {
    await issueModel.removeAssignee(payload);
  }
}

const issueService = new IssueService();

module.exports = issueService;
