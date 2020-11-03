const commentModel = require('@models/comment-model');

class IssueService {
  async deleteCommentByIssue(payload) {
    const isDeleted = await commentModel.deleteCommentByIssue(payload);

    return isDeleted;
  }
}

const issueService = new IssueService();

module.exports = issueService;
