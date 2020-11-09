const milestoneModel = require('@models/milestone-model');
const issueModel = require('@models/issue-model');

class MilestoneService {
  async updateMilestoneById(payload) {
    const updatedMilestone = await milestoneModel.selectById(
      payload.milestone_id,
    );

    if (!updatedMilestone) {
      throw Error('수정할려는 마일스톤 존재하지 않음');
    }
    if (payload.title.length === 0) {
      throw Error('title 을 입력하세요.');
    }

    if (payload.due_date && new Date(payload.due_date) < new Date()) {
      throw Error('유효하지 않은 날짜입니다.');
    }

    await milestoneModel.updateMilestoneById(payload);
  }
  
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
