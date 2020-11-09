const { errorMessage, succeedMessage } = require('@utils/server-message');
const labelService = require('@services/label-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class LabelController {
  async updateLabel(req, res) {
    try {
      req.body.id = req.params.id;
      await labelService.updateLabel(req.body);

      return res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedUpdate,
      })
    }
    catch (error) {
        res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedUpdate });
     }
  }
  
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
