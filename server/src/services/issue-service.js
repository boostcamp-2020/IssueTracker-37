const issueModel = require('@models/issue-model');
const { models } = require('@sequelize');

class IssueService {
  async findOneWithLabel(id) {
    const issue = await issueModel.selectById(id, models.Label);

    return issue;
  }

  async addLabel(payload) {
    const issueToLabel = await issueModel.addLabel(payload);

    return issueToLabel;
  }
}

const issueService = new IssueService();

module.exports = issueService;
