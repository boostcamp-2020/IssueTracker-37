const applyExtraSetup = (sequelize) => {
  const { Issue, User, Milestone, Label, Comment } = sequelize.models;

  User.belongsToMany(Issue, { through: 'assignees' });
  Issue.belongsToMany(User, { through: 'assignees' });

  User.hasMany(Comment, { foreignKey: 'user_id', sourceKey: 'id' });
  Comment.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

  Issue.hasMany(Comment, { foreignKey: 'issue_id', sourceKey: 'id' });
  Comment.belongsTo(Issue, { foreignKey: 'issue_id', targetKey: 'id' });

  Milestone.hasMany(Issue, { foreignKey: 'milestone_id', sourceKey: 'id' });
  Issue.belongsTo(Milestone, { foreignKey: 'milestone_id', targetKey: 'id' });

  Issue.belongsToMany(Label, {
    through: 'issue_to_label',
    foreignKey: 'issue_id',
    sourceKey: 'id',
  });
  Label.belongsToMany(Issue, {
    through: 'issue_to_label',
    foreignKey: 'label_id',
    sourceKey: 'id',
  });
};

module.exports = applyExtraSetup;
