'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Suhus', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      suhu: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        underscored: true
      },
      createdBy:{
        allowNull: false,
        type:Sequelize.STRING,
        defaultValue:"System"
      },
      updatedAt: {
        type: Sequelize.DATE,
        underscored: true
      },
      updatedBy: {
        type: Sequelize.STRING,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      deletedBy: {
        type: Sequelize.STRING,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Suhus');
  }
};