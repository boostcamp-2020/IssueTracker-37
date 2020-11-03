const issueService = require('@services/issue-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class IssueController {
  async getOneById(req, res) {
    try {
      const id = req.params.issue_id;
      const issue = await issueService.findOneWithLabel(id);

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

  async postIssueToLabel(req, res) {
    try {
      const payload = {
        issueId: req.params.issue_id,
        labelId: req.params.label_id,
      };

      const issueToLabel = await issueService.createIssueToLabel(payload);

      res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedInsert,
        data: issueToLabel,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedInsert });
    }
  }

  async deleteIssueToLabel(req, res) {
    try {
      const payload = {
        issueId: req.params.issue_id,
        assigneeId: req.params.assignee_id,
      };
      await issueService.deleteAssignee(payload);

      res.status(200).send({
        message: succeedMessage.succeedDelete,
        data: null,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedDelete });
    }
  }
}

const issueController = new IssueController();

module.exports = issueController;
