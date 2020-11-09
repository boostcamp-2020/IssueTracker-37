const milestoneModel = require('@models/milestone-model');

class MilestoneService {
  async deleteMilestoneById(id) {
    const isDeleted = await milestoneModel.deleteMilestoneById(id);

    if (!isDeleted) throw new Error();
    return isDeleted;
  }
}

const milestoneService = new MilestoneService();

module.exports = milestoneService;
