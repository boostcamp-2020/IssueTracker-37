const milestoneModel = require('@models/milestone-model');
const issueModel = require('@models/issue-model')

class MilestoneService {
  async getMilestones() {
    try {
      const milestones = await milestoneModel.getMilestones(issueModel);

    } catch (err) {
      throw new Error();
    }

    return milestones
  }
}

const milestoneService = new MilestoneService();

module.exports = milestoneService;
