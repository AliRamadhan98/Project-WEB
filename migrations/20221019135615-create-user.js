'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        defaultValue:Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      role: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      rfid: {
        type: Sequelize.STRING
      },
      date_created: {
        allowNull: false,
        type: Sequelize.DATE,
        underscored: true
      },
      created_by:{
        allowNull: false,
        type:Sequelize.STRING,
        defaultValue:"System"
      },
      date_modified: {
        type: Sequelize.DATE,
        underscored: true
      },
      modified_by: {
        type: Sequelize.STRING,
      },
      date_deleted: {
        type: Sequelize.DATE,
      },
      deleted_by: {
        type: Sequelize.STRING,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};