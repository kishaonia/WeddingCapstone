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
       firstName:"Kisha",
       lastName:"Onia",
       username:"kishaoni",
       email:"kishaonia@aa.io",
       password:"password"
       
     },
     {


      firstName:"Demo",
      lastName:"User",
      username:"kishaonia",
      email:"demouser@aa.io",
      password:"password"
      
   },
     {

      firstName:"Kristine",
      lastName:"Onia",
      username:"kristineonia",
      email:"kristine@aa.io",
      password:"password"
      
     },
     {
      firstName:"Kim",
      lastName:"Ong",
      username:"kimong",
      email:"kim@aa.io",
      password:"password"
      
     },
     {
      firstName:"Britney",
      lastName:"The Rottie",
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
     username: { [Op.in]: ['kishaonia', 'demouser', 'kristineonia', 'kimong', 'britneytherottie'] }
   }, {});
 }
};
