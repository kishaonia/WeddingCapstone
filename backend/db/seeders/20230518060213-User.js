'use strict';
/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        FirstName:"Kisha",
        LastName:"Onia",
        username:"kishaonia",
        email:"kishaonia@aa.io",
        password:"password"
      },
      {

        FirstName:"Demo",
        LastName:"User",
        username:"demouser",
        email:"demouser@aa.io",
        password:"password"
      
    },
      {

        FirstName:"Kristine",
        LastName:"Onia",
        username:"kristineonia",
        email:"kristine@aa.io",
        password:"password"
      
      },
      {

        FirstName:"Kim",
        LastName:"Ong",
        username:"kimgong",
        email:"kim@aa.io",
        password:"password"
        
      },
      {

        FirstName:"Britney",
        LastName:"Ong-Onia",
        username:"britneytherottie",
        email:"britney@aa.io",
        password:"password"
        
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['kishaonia', 'demouser', 'kristineonia', 'kimgong', 'britneytherottie'] }
    }, {});
  }
};
