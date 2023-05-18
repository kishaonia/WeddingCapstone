'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      User.hasMany(
        models.Comment,
        { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }
      );
      User.hasOne(
        models.Registry,
        { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }
      );
      User.hasMany(
        models.Photo,
        { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }
      );
      User.hasMany(
        models.SongRequest,
        { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }
      );
    }
  }
  User.init({
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};