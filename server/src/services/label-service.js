const labelModel = require('@models/label-model');

class LabelService {
  async updateLabel(payload) {
    try {
      const result = await labelModel.updateLabel(payload);

      if (!result[0]) throw new Error();
    } catch (err) {
      throw new Error();
    }
  }
}

const labelService = new LabelService();

module.exports = labelService;
