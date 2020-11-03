const issueService = require('@services/issue-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class IssueController {
  getOneById(req, res) {
    try {
      const id = req.params.issue_id;
      const issue = issueService.findOneById(id);

      res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedSelect,
        data: issue,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedSelect });
    }
  }
}

const issueController = new IssueController();

module.exports = issueController;
