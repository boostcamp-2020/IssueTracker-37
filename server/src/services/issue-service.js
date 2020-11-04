const issueModel = require('@models/issue-model');
const labelModel = require('@models/label-model');
const commentModel = require('@models/comment-model');

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
  
  async findOneWithLabel(id) {
    const issue = await issueModel.selectById(id, labelModel);

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
