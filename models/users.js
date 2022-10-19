'use strict';
const {
  Model, UUIDV4
} = require('sequelize');

const {hashPassword} = require("../helpers/bcrypt")

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Suhu)
    }
  }
  Users.init({
    id:{
      allowNull: false,
      defaultValue:UUIDV4,
      primaryKey: true,
      type: UUIDV4
    },
    role: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty: {
          args:true,
          msg:"Username Required"
        },
        notNull:{
          args:true,
          msg:"Username Required"
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
          msg:"Phone Number Required"
        },
        notNull:{
          args:true,
          msg:"Phone Number Required"
        }
      }
    },
    isDeleted: DataTypes.BOOLEAN,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
          msg:"Password Required"
        },
        notNull:{
          args:true,
          msg:"Password Required"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
          msg:"Email Required"
        },
        notNull:{
          args:true,
          msg:"Email Required"
        },
        isEmail:{
          args:true,
          msg:"Wrong Email Format"
        }
      }
    },
    rfid: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING,
    deletedAt: DataTypes.DATE,
    deletedBy: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });

  Users.beforeCreate((instance)=>{
    instance.password = hashPassword(instance.password);
  })

  return Users;
};