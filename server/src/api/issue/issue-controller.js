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
    }
  }

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
      console.error(error);
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedSelect });
    }
  }

  async updateIssueByMilestone(req, res) {
    try {
      const payload = {
        issue_id: req.params.issue_id,
        milestone_id: req.params.milestone_id,
      };

      await issueService.updateIssueByMilestone(payload);

      res.status(200).send({
        status: 'success',
        message: succeedMessage.succeedInsert,
      });
    } catch (err) {
      console.error(err);
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

  async deleteIssueByLabel(req, res) {
    try {
      const payload = {
        content: req.body.content,
        issue_id: req.params.issue_id,
        label_id: req.params.label_id,
      };

      await issueService.deleteIssueByLabel(payload);

      res.status(200).send({
        status: 'success',
        message: succeedMessage.succeedDelete,
      });
    } catch (err) {
      console.error(err);
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedDelete });
    }
  }

  async deleteAssignee(req, res) {
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

  async insertAssigneeByIssue(req, res) {
    try {
      const payload = req.params;
      const isInserted = await issueService.insertAssigneeByIssue(payload);

      if (isInserted) {
        res
          .status(200)
          .send({ state: 'success', message: succeedMessage.succeedInsert });
      }
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedInsert });
    }
  }

  async create(req, res) {
    try {
      const issueResult = await issueService.createIssue(req.body);

      res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedInsert,
        data: issueResult,
      });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedInsert });
    }
  }

  async update(req, res) {
    try {
      req.body.id = req.params.issue_id;
      const update = await issueService.updateIssue(req.body);

      res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedUpdate,
        data: update,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedUpdate });
    }
  }

  async delete(req, res) {
    try {
      const result = await issueService.deleteIssue(req.params.issue_id);

      res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedDelete,
        data: result,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedDelete });
    }
  }

  async updateComment(req, res) {
    try {
      req.body.id = req.params.comment_id;
      req.body.issue_id = req.params.issue_id;
      await issueService.editComment(req.body);

      res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedUpdate,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedUpdate });
    }
  }
  async createComment(req, res) {
    try {
      const payload = {
        content: req.body.content,
        user_id: req.body.user_no, // 임시 req.body.no 로 받아와야함.
        issue_id: req.params.issue_id,
      };
      const comment = await issueService.createComment(payload);

      res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedInsert,
        data: comment,
      });
    } catch (error) {
      console.error(error);

      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedInsert });
    }
  }
}

const issueController = new IssueController();

module.exports = issueController;
