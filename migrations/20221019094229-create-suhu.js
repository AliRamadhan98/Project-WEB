'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Suhus', {
      id: {
        allowNull: false,
        defaultValue:Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      temp: {
        type: Sequelize.STRING
      },
      humid: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      lon: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Suhus');
  }
};