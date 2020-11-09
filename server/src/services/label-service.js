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
}

const labelService = new LabelService();

module.exports = labelService;
