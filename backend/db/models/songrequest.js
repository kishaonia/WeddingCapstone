'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SongRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SongRequest.belongsTo(
      models.User,
        {
          foreignKey: 'userId',

        }
      )
  
    }
  }
  SongRequest.init({
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    username: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SongRequest',
  });
  return SongRequest;
};