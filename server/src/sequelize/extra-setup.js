const applyExtraSetup = (sequelize) => {
  const { issue, user, milestone, label, comment } = sequelize.models;

  user.belongsToMany(issue, { through: 'assignees' });
  issue.belongsToMany(user, { through: 'assignees' });

  user.hasMany(comment, { foreignKey: 'user_id', sourceKey: 'id' });
  comment.belongsTo(user, { foreignKey: 'user_id', targetKey: 'id' });

  issue.hasMany(comment, { foreignKey: 'issue_id', sourceKey: 'id' });
  comment.belongsTo(issue, { foreignKey: 'issue_id', targetKey: 'id' });

  milestone.hasMany(issue, { foreignKey: 'milestone_id', sourceKey: 'id' });
  issue.belongsTo(milestone, { foreignKey: 'milestone_id', targetKey: 'id' });

  issue.belongsToMany(label, { through: 'issue_to_label' });
  label.belongsToMany(issue, { through: 'issue_to_label' });
};

module.exports = applyExtraSetup;
