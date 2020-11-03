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
}

const issueController = new IssueController();

module.exports = issueController;