const { Model } = require('sequelize');

class Assignee extends Model {
  static initialize(sequelize) {
    super.init(
      {},
      {
        modelName: 'Assignee',
        tableName: 'assignee',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
}

module.exports = Assignee;
