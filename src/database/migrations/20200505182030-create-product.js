'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(8,2)
      },
      discount: {
        type: Sequelize.DECIMAL(5,2)
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'Categories', key: 'id' },
        onDelete: 'no action',
        onUpdate: 'no action',
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: 'default-image.png'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      'deletedAt': {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};