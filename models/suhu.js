'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suhu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Suhu.belongsTo(models.Users)
    }
  }
  Suhu.init({
    id:{
      allowNull: false,
      defaultValue:UUIDV4,
      primaryKey: true,
      type: UUIDV4
    },
    suhu: DataTypes.STRING,
    userId: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Suhu',
  });
  return Suhu;
};