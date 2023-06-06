'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(
        models.Registry,{
          foreignKey: 'registryId',
        }
      )
       Comment.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      // define association here
    }
  }
  Comment.init({
    userId: DataTypes.INTEGER,
    registryId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    like:DataTypes.INTEGER,
    file: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};