const labelService = require('@services/label-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class LabelController {
  async insertLabel(req, res) {
    try {
      const payload = {
        title: req.body.title,
        description: req.body.description,
        color: req.body.color,
      };
      const label = await labelService.insertLabel(payload);

      res.status(200).send({
        status: 'success',
        data: label,
        message: succeedMessage.succeedInsert,
      });
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedInsert });
    }
  }
}

const labelController = new LabelController();

module.exports = labelController;
