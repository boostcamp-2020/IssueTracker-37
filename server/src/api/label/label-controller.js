const { errorMessage, succeedMessage } = require('@utils/server-message');
const labelService = require('@services/label-service');

class LabelController {
  async getLabels(req, res) {
    try {
      const labels = await labelService.getLabels();

      return res.status(200).json({
        state: 'success',
        message: succeedMessage.succeedSelect,
        data: labels,
      });
    } catch (error) {
      res
        .status(400)
        .json({ state: 'fail', message: errorMessage.failedSelect });
    }
  }
}

const labelController = new LabelController();

module.exports = labelController;
