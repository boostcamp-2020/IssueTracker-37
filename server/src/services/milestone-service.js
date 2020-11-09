const milestoneModel = require('@models/milestone-model');

class MilestoneService {
  async insertMilestone(payload) {
    try {
      const milestoneResult = await milestoneModel.insert(payload);

      if (!milestoneResult) {
        throw new Error();
      }
      return milestoneResult;
    } catch (error) {
      throw error;
    }
  }
}

const milestoneService = new MilestoneService();

module.exports = milestoneService;
