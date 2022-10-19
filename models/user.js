'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Suhu)
    }
  }
  User.init({
    id:{
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUIDV4
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
    date_created:DataTypes.DATE,
    created_by: DataTypes.STRING,
    date_modified: DataTypes.DATE,
    modified_by: DataTypes.STRING,
    date_deleted: DataTypes.DATE,
    deleted_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    createdAt:"date_created",
    deletedAt:"date_deleted",
    updatedAt:"date_modified",
  });

  User.beforeCreate((instance)=>{
    instance.date_modified = null
    instance.password = hashPassword(instance.password);
  })

  User.beforeUpdate((instance) =>{
    instance.modified_by = instance.email
  })
  return User;
};