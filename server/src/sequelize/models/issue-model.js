/* eslint-disable object-shorthand */
const { DataTypes, Model } = require('sequelize');

class Issue extends Model {
  static initialize(sequelize) {
    super.init(
      {
        title: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        state: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defalutValue: true,
        },
      },
      {
        modelName: 'Issue',
        tableName: 'issue',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }

  static async insert(payload) {
    const insertIssue = await this.create(payload);

    return insertIssue;
  }

  static async deleteById(id) {
    const result = await this.destroy({ where: { id: id } });

    if (result) return result;
    else throw new Error();
  }
}

module.exports = Issue;
