const issueService = require('@services/issue-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class IssueController {
  async deleteCommentByIssue(req, res) {
    try {
      const payload = {
        issue_id: req.params.issue_id,
        id: req.params.comment_id,
      };
      const isDeleted = await issueService.deleteCommentByIssue(payload);

      if (isDeleted) {
        res
          .status(200)
          .send({ state: 'success', message: succeedMessage.succeedDelete });
      }
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedDelete });
    }
  }

  async deleteMilestoneByIssue(req, res) {
    try {
      const payload = {
        id: req.params.issue_id,
        milestone_id: req.params.milestone_id,
      };
      const isDeleted = await issueService.deleteMilestoneByIssue(payload);

      if (isDeleted) {
        res
          .status(200)
          .send({ state: 'success', message: succeedMessage.succeedDelete });
      }
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedDelete });
    }
  }
}

const issueController = new IssueController();

module.exports = issueController;
