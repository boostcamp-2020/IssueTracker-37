const { errorMessage, succeedMessage } = require('@utils/server-message');
const labelService = require('@services/label-service');

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
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedInsert });
    }
  }

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

  async updateLabel(req, res) {
    try {
      req.body.id = req.params.id;
      await labelService.updateLabel(req.body);
      return res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedUpdate,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedUpdate });
    }
  }

  async getLabels(req, res) {
    try {
      const labels = await labelService.getLabels();

      return res.status(200).send({
        state: 'success',
        message: succeedMessage.succeedSelect,
        data: labels,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedSelect });
    }
  }
}

const labelController = new LabelController();

module.exports = labelController;
