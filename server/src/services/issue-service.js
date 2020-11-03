const issueModel = require('@models/issue-model');

class IssueService {
  async getIssues() {
    const issues = await issueModel.getIssues();

    return issues;
  }
}

const issueService = new IssueService();

module.exports = issueService;
