const issueService = require('@services/issue-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class IssueController {
  async create(req, res) {
    try {
      const insert = await issueService.createIssue(req.body);

      // TODO: assignee 관계 생성 - 만약 있다면

      // TODO: issueToLabel 관계 생성 - 만약 있다면

      res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedInsert,
        data: insert,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedInsert });
    }
  }
}

const issueController = new IssueController();

module.exports = issueController;
