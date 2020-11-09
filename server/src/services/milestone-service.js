const milestoneModel = require('@models/milestone-model');
const issueModel = require('@models/issue-model')

class MilestoneService {
  async getMilestones() {
    try {
      const milestones = await milestoneModel.getMilestones(issueModel);

      return milestones;
    } catch (err) {
      throw new Error();
    }
  }
}

const milestoneService = new MilestoneService();

module.exports = milestoneService;
