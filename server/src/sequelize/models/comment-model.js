const { DataTypes, Model } = require('sequelize');

class Comment extends Model {
  static initialize(sequelize) {
    super.init(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: 'Comment',
        tableName: 'commnet',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }

  static async deleteCommentByIssue(payload) {
    const result = await this.destroy({ where: payload });

    if (!result) throw new Error();
    return result;
  }
}

module.exports = Comment;
