const milestoneService = require('@services/milestone-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class MilestoneController {
  async insertMilestone(req, res) {
    try {
      const insertResult = await milestoneService.insertMilestone(req.body);

      res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedInsert,
        data: insertResult,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedInsert });
    }
  }
}

const milestoneController = new MilestoneController();

module.exports = milestoneController;
