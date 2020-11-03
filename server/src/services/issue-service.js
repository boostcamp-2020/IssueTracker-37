const issueModel = require('@models/issue-model');

class IssueService {
  async findOneById(id) {
    const issue = await issueModel.selectById(id);

    return issue;
  }
}

const issueService = new IssueService();

module.exports = issueService;
