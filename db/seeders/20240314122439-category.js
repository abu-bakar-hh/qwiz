'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
       name: 'Гиганты Эльбруса',
       img: "/mockups/IMG_5359.JPG",
       userID: 1,
       createdAt: new Date(),
       updatedAt: new Date()
   
      },
      {
        name: 'Программист?',
        img: '/mockups/IMG_0672.JPG',
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    
      },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
