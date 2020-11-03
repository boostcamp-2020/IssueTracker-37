const issueModel = require('@models/issue-model');
const milestoneModel = require('@models/milestone-model');
class IssueService {
  async getIssues() {
    const issues = await issueModel.getIssues();
    return issues;
  }

  async updateIssueByMilestone(payload){
    // FIX: 
    // const updatedIssue = await issueModel.selectById(payload.issue_id);
    // if(!updatedIssue){
    //   throw new Error('수정할려는 이슈없음');
    // }
    // const addedMilestone = await milestoneModel.selectById(payload.milestone_id);
    // if(!addedMilestone){
    //   throw new Error('추가될려는 마일스톤 존재하지않음');
    // }
    // await issueModel.updateIssueByMilestone(payload);
    await issueModel.updateIssueByMilestone(payload);
  }

  async deleteIssueByLabel(payload){
    await issueModel.deleteIssueByLabel(payload);
  }

}

const issueService = new IssueService();

module.exports = issueService;
