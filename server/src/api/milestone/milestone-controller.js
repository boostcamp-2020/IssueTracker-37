const { errorMessage, succeedMessage } = require('@utils/server-message');
const milestoneService = require('@services/milestone-service');

class MilestoneController {
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
