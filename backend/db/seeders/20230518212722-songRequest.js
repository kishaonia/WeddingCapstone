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
   options.tableName = 'songRequests';
   return queryInterface.bulkInsert(options, [
     {
      userId:1,
      songName:"The 1",
      artist:"Taylor Swift",
      like:0
     },
     {


       userId:2,
       songName:"Lover",
      artist:"Taylor Swift",
      like:2
   },
     {


       userId:3,
       songName:"invisible string",
       artist:"Taylor Swift",
       like:1
    
     },
     {


       userId:4,
       songName:"Make You Feel My Love",
      artist:"Adele",
      like:2
    
     },
     {


       userId:5,
       songName:"When We Were Young",
       artist:"Adele",
       like:1
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
   options.tableName = 'songRequests';
   const Op = Sequelize.Op;
   return queryInterface.bulkDelete(options, {
     userId: { [Op.in]: [1, 2, 3, 4, 5] }
   }, {});
  
 }
};
