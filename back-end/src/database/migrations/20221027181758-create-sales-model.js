'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreingKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales');
  }
};