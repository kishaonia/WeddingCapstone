'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init(
    {
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 // Default value for the like count
      },
      photoId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      commentId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      registryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Like'
    }
  );

  return Like;
};