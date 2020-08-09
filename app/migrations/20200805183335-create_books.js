'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('books',
      {
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        name: {
          type: Sequelize.STRING
        },
        author: {
          type: Sequelize.STRING
        },
        publication: {
          type: Sequelize.STRING
        },
        price: {
          type: Sequelize.INTEGER
        },
        edition: {
          type: Sequelize.INTEGER
        },
        volume: {
          type: Sequelize.STRING
        },
        no_of_copies: {
          type: Sequelize.INTEGER
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('books');
  }
};
