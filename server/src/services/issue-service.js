const commentModel = require('@models/comment-model');
const issueModel = require('@models/issue-model');

class IssueService {
  async deleteCommentByIssue(payload) {
    const isDeleted = await commentModel.deleteCommentByIssue(payload);

    return isDeleted;
  }

  async deleteMilestoneByIssue(payload) {
    const isDeleted = await issueModel.deleteMilestoneByIssue(payload);

    return isDeleted;
  }

  async insertAssigneeByIssue(payload) {
    const isInserted = await issueModel.insertAssigneeByIssue(payload);

    return isInserted;
  }
}

const issueService = new IssueService();

module.exports = issueService;
