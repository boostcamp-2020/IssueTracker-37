const issueService = require('@services/issue-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class IssueController {
  async getIssues(req, res) {
    try {
      const issues = await issueService.getIssues();

      res.status(200).send({
        status: 'success',
        message: succeedMessage.succeedSelect,
        data: issues,
      });
    } catch (err) {
      console.error(err);
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedSelect });
    }
  }

  async updateIssueByMilestone(req, res) {
    try {
      const payload = {
        issue_id: req.params.issue_id, 
        milestone_id: req.params.milestone_id
      };
      await issueService.updateIssueByMilestone(payload);
      res.status(200).send({
        status: 'success',
        message: succeedMessage.succeedInsert,
      });
    } catch (err) {
      console.error(err);
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedInsert });
    }
  }
}

const issueController = new IssueController();

module.exports = issueController;
