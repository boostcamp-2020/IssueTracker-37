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
        tableName: 'comment',
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

  static async selectById(id) {
    const comment = await this.findByPk(id);

    if (!comment) throw new Error();
    return comment
  }

  static async updateComment(payload) {
    const result = this.update(payload, { where: { id: payload.id } })

    if (!result) throw new Error();
    return result;
  }
}

module.exports = Comment;
