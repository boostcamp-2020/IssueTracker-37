const labelModel = require('@models/label-model');

class LabelService {
  async getLabels() {
    const labels = await labelModel.getLabels();
    const data = {
      count: labels.length,
      labels,
    };

    return data;
  }
}

const labelService = new LabelService();

module.exports = labelService;
