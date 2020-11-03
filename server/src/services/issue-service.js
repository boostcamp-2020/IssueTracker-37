const issueModel = require('@models/issue-model');

class IssueService {
  async createIssue(payload) {
    const insertIssue = await issueModel.insert(payload);

    return insertIssue;
  }
}

const issueService = new IssueService();

module.exports = issueService;
