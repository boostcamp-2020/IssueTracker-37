const { errorMessage, succeedMessage } = require('@utils/server-message');
const milestoneService = require('@services/milestone-service');

class MilestoneController {
  async getMilestones(req, res) {
    try {
      const milestones = await milestoneService.getMilestones();

      res.status(200).send({
        status: 'success',
        message: succeedMessage.succeedSelect,
        data: {
          count: milestones.length,
          Milestones: milestones,
        },
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
        .json({ state: 'fail', message: errorMessage.failedDelete });
    }
  }
}

const milestoneController = new MilestoneController();

module.exports = milestoneController;
