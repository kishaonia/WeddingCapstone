'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guestlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Guestlist.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      // define association here
    }
  }
  Guestlist.init({
    userId: DataTypes.INTEGER,
    guest: DataTypes.INTEGER,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Guestlist',
  });
  return Guestlist;
};