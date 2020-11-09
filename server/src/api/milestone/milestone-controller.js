const milestoneService = require('@services/milestone-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class MilestoneController {
  async updateMilestoneById(req, res) {
    try {
      const payload = {
        milestone_id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        due_date: req.body.due_date,
      };

      await milestoneService.updateMilestoneById(payload);

      res.status(200).send({
        status: 'success',
        message: succeedMessage.succeedUpdate,
      });
    } catch (err) {
      console.error(err);
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedUpdate });
    }
  }
}

const milestoneController = new MilestoneController();

module.exports = milestoneController;
