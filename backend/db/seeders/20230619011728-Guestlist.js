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
   options.tableName = 'Guestlists';
   return queryInterface.bulkInsert(options, [
     {
      userId:1,
      guest:'1',
      description:"No preference"
     },
     {


       userId:2,
       guest:'1',
       description:"No preference"
   },
     {


       userId:3,
       guest:'1',
       description:"No preference"
    
     },
     {


       userId:4,
       guest:'1',
       description:"No preference"
    
     },
     {


       userId:5,
       guest:'1',
       description:"No preference"
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
   options.tableName = 'Guestlists';
   const Op = Sequelize.Op;
   return queryInterface.bulkDelete(options, {
    userId: { [Op.in]: [1, 2, 3, 4, 5] }
   }, {});
  
 }
};
