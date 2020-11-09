const labelModel = require('@models/label-model');

class LabelService {
  async insertLabel(payload) {
    if (payload.title.length === 0) {
      throw new Error('title 을 입력하세요');
    }
    const exLabel = await labelModel.getLabelByTitle(payload.title);

    if (exLabel) {
      throw new Error('이미 존재하는 라벨입니다.');
    }
    const label = await labelModel.insertLabel(payload);

    return label;
  }
  
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
