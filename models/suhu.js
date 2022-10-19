'use strict';
const {
  Model
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
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUIDV4
    },
    temp: DataTypes.STRING,
    humid: DataTypes.STRING,
    lat: DataTypes.STRING,
    lon: DataTypes.STRING,
    UserId: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    date_created:DataTypes.DATE,
    created_by: DataTypes.STRING,
    date_modified: DataTypes.DATE,
    modified_by: DataTypes.STRING,
    date_deleted: DataTypes.DATE,
    deleted_by: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'Suhu',
    createdAt:"date_created",
    deletedAt:"date_deleted",
    updatedAt:"date_modified"
  });

  Suhu.beforeCreate((instance)=>{
    instance.date_modified = null
  })

  Suhu.beforeUpdate((instance) =>{
    instance.modified_by = instance.email
  })

  return Suhu;
};