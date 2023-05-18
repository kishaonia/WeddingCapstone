'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class songRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      songRequest.belongsTo(
        models.User,
        {foreignKey:'userId'}
      )
      // define association here
    }
  }
  songRequest.init({
    userId: DataTypes.INTEGER,
    songName: DataTypes.STRING,
    artist: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'songRequest',
  });
  return songRequest;
};