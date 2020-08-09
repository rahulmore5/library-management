'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('users',
      {
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        firstname: {
          type: Sequelize.STRING
        },
        lastname: {
          type: Sequelize.STRING
        },
        phone: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        address:{
          type: Sequelize.STRING
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
    return queryInterface.dropTable('users');
  }
};
