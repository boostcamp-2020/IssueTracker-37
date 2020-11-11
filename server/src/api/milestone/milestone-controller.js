const { errorMessage, succeedMessage } = require('@utils/server-message');
const milestoneService = require('@services/milestone-service');

class MilestoneController {
  async updateMilestoneById(req, res) {
    try {
      req.body.id = req.params.id;
      await milestoneService.updateMilestoneById(req.body);

      res.status(200).send({
        status: 'success',
        message: succeedMessage.succeedUpdate,
      });
    } catch (err) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedUpdate });
    }
  }

  async insertMilestone(req, res) {
    try {
      const insertResult = await milestoneService.insertMilestone(req.body);

      res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedInsert,
        data: insertResult,
      });
    } catch (err) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedSelect });
    }
  }

  async getMilestones(req, res) {
    try {
      const milestones = await milestoneService.getMilestones();

      res.status(200).send({
        status: 'success',
        message: succeedMessage.succeedSelect,
        data: milestones,
      });
    } catch (err) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedSelect });
    }
  }

  async deleteMilestoneById(req, res) {
    try {
      const { id } = req.params;

      await milestoneService.deleteMilestoneById(id);

      return res.status(200).json({
        state: 'success',
        message: succeedMessage.succeedDelete,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedDelete });
    }
  }
}

const milestoneController = new MilestoneController();

module.exports = milestoneController;
