const labelService = require('@services/label-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

class LabelController {
  async deleteById(req, res) {
    const id = req.params.id;

    try {
      const result = await labelService.deleteById(id);

      res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedDelete,
        data: result,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedDelete });
    }
  }
}

const labelController = new LabelController();

module.exports = labelController;
