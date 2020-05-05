'use strict';

const faker = require('faker');

let discounts = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

module.exports = {
  up: (queryInterface, Sequelize) => {
    let products = [];

    for (let i = 1; i <= 32; i++) {
      let imgNumber = Math.ceil(Math.random() * 16);

      products = [
        ...products,
        {
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          discount: discounts[Math.floor(Math.random() * discounts.length)],
          categoryId: i % 2 === 0 ? 1 : 2,
          description: faker.lorem.sentences(),
          image: `img-${imgNumber < 10 ? '0' + imgNumber : imgNumber}.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    }

    return queryInterface.bulkInsert('Products', products, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
