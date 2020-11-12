const milestoneModel = require('@models/milestone-model');
const labelModel = require('@models/label-model');
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

  async findOneWithLabel(id) {
    const issue = await issueModel.selectById(id);

    return issue;
  }

  async createIssueToLabel(payload) {
    const issueToLabel = await issueModel.inserIssueToLabel(payload);

    return issueToLabel;
  }

  async deleteAssignee(payload) {
    await issueModel.removeAssignee(payload);
  }

  async getIssues() {
    const issues = await issueModel.getIssues();

    return issues;
  }

  async updateIssueByMilestone(payload) {
    await issueModel.selectById(payload.issue_id);
    await milestoneModel.selectById(payload.milestone_id);
    await issueModel.updateIssueByMilestone(payload);
  }

  async deleteIssueByLabel(payload) {
    await issueModel.deleteIssueByLabel(payload);
  }

  async createIssue(payload) {
    const { issue, assignees, labels } = payload;

    const issueResult = await issueModel.insert(issue);

    const issueId = issueResult.id;

    await assignees.forEach(async (assignee) => {
      assignee.issue_id = issueId;

      await issueModel.insertAssigneeByIssue(assignee);
    });

    await labels.forEach(async (label) => {
      label.issueId = issueId;
      label.labelId = label.label_id;

      await issueModel.addIssueToLabel(label);
    });

    return issueResult;
  }

  async updateIssue(payload) {
    try {
      const result = await issueModel.updateIssue(payload);

      if (!result[0]) throw new Error();
    } catch (err) {
      throw new Error();
    }
  }

  async deleteIssue(payload) {
    const result = await issueModel.deleteById(payload);

    return result;
  }

  async editComment(payload) {
    try {
      const comment = await commentModel.selectById(payload.id);

      if (
        comment.id !== +payload.id ||
        comment.issue_id !== +payload.issue_id ||
        !payload.content
      )
        throw new Error();
      const result = await commentModel.updateComment(payload);

      if (!result[0]) throw new Error();
    } catch (err) {
      throw new Error();
    }
  }

  async createComment(payload) {
    await issueModel.selectById(payload.issue_id);
    const comment = await commentModel.createComment(payload);

    return comment;
  }
}

const issueService = new IssueService();

module.exports = issueService;
