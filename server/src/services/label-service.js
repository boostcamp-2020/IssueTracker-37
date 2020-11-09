const labelModel = require('@models/label-model');

class LabelService {
  async deleteById(id) {
    try {
      const result = await labelModel.deleteById(id);

      if (result === 0) {
        throw new Error();
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  async updateLabel(payload) {
    try {
      const [result] = await labelModel.updateLabel(payload);

      if (!result) throw new Error();
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
