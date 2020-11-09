const milestoneService = require('@services/milestone-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class MilestoneController {
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

}

const milestoneController = new MilestoneController();

module.exports = milestoneController;
