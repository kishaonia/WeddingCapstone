'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Registry.belongsTo(models.User,
          {
          foreignKey: 'userId',
        });

        Registry.hasOne(models.Comment, {
          foreignKey: "registryId",
          onDelete: "CASCADE",
          hooks: true,
        });
      // define association here
    }
  }
  Registry.init({
    userId: DataTypes.INTEGER,
    registryItem: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registry',
  });
  return Registry;
};