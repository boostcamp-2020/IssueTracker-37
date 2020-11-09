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
