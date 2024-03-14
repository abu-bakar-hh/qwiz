'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      {
       name: 'Ответ-1',
       questionID: 1,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        name: 'Ответ-2',
        questionID:2,
        createdAt: new Date(),
        updatedAt: new Date()
    
      },
      ], {});

      
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
