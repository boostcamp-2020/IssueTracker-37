const { DataTypes, Model } = require('sequelize');

class Label extends Model {
  static initialize(sequelize) {
    super.init(
      {
        title: {
          type: DataTypes.STRING(30),
          unique: true,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        color: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        modelName: 'Label',
        tableName: 'label',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }

  static async getLabelByTitle(title) {
    const label = await this.findOne({
      where: { title },
    });

    return label;
  }

  static async insertLabel(payload) {
    const label = await this.create(payload);

    return label;
  }

  static async deleteById(id) {
    const result = this.destroy({ where: { id } });

    return result;
  }

  static async updateLabel(payload) {
    const result = await this.update(payload, {
      where: { id: payload.id },
    });

    return result;
  }

  static async getLabels() {
    const labels = await this.findAll({
      order: [['id', 'DESC']],
    });

    return labels;
  }
}

module.exports = Label;
