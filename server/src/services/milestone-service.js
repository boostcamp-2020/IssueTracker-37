const milestoneModel = require('@models/milestone-model');
const issueModel = require('@models/issue-model');

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
  
  async getMilestones() {
    try {
      const milestones = await milestoneModel.getMilestones(issueModel);

      return milestones;
    } catch (err) {
      throw new Error();
    }
  }

  async deleteMilestoneById(id) {
    const isDeleted = await milestoneModel.deleteMilestoneById(id);

    if (!isDeleted) throw new Error();
    return isDeleted;
  }
}

const milestoneService = new MilestoneService();

module.exports = milestoneService;
