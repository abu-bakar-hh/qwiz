'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
       name: 'Abubakar',
       email: "abubakarkhulaev@gmail.com",
       password: '12345678',
       scores: 999,
       createdAt: new Date(),
       updatedAt: new Date(),
   
      },
      {
        name: 'Mansur',
        email: "mansur@gmail.com",
        password: '12345678',
        scores: 777,
        createdAt: new Date(),
        updatedAt: new Date(),
    
      },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
