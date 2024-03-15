'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
       name: 'Вопрос-1',
       img: "/mockups/IMG_5359.JPG",
       categoryID: 1,
       createdAt: new Date(),
       updatedAt: new Date()
   
      },
      {
        name: 'Вопрос-2',
        img: '/mockups/IMG_0672.JPG',
        categoryID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    
  await queryInterface.bulkDelete('Questions', null, {});
    
  }
};
