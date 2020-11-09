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

  static async getLabelByTitle(title){
    const label = await this.findOne({
      where: {title}
    })
    return label;
  }

  static async insertLabel(payload){
   
    const label =  await this.create({
      title: payload.title,
      description: payload.description,
      color: payload.description
    })
    return label;
  }

}

module.exports = Label;
