const issueModel = require('@models/issue-model');

class IssueService {
  async createIssue(payload) {
    const insertIssue = await issueModel.insert(payload);

    return insertIssue;
  }

  async updateIssue(payload) {
    const { id } = payload;

    delete payload.id;

    const updateIssue = await issueModel.update(payload, { where: { id } });

    return updateIssue;
  }

  async deleteIssue(payload) {
    const result = await issueModel.deleteById(payload);

    return result;
  }
}

const issueService = new IssueService();

module.exports = issueService;
