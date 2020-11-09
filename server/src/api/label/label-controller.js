const labelService = require('@services/label-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class LabelController {
  async updateLabel(req, res) {
    try {
      req.body.id = req.params.id;
      await labelService.updateLabel(req.body);

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
}

const labelController = new LabelController();

module.exports = labelController;
