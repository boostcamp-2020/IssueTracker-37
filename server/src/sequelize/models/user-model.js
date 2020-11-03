const { DataTypes, Model } = require('sequelize');

class User extends Model {
  static initialize(sequelize) {
    super.init(
      {
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(250),
          allowNull: true,
        },
        provider: {
          type: DataTypes.STRING(20),
          allowNull: true,
          defalutValue: 'local',
        },
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        profile: {
          type: DataTypes.STRING(250),
          allowNull: true,
        },
      },
      {
        modelName: 'User',
        tableName: 'user',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }

  static async insert(payload) {
    const insertUser = await this.create(payload);

    return insertUser;
  }
}

module.exports = User;
