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
   options.tableName = 'Photos';
   return queryInterface.bulkInsert(options, [
     {
      userId:1,
      url:'https://variety.com/wp-content/uploads/2023/03/enchanted-1.jpg',
      description:"Is it ok"
     },
     {


       userId:2,
       url:'https://media1.popsugar-assets.com/files/thumbor/clt-p0x9jKRBpHWm4P6ltLn8JyE/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2023/04/14/700/n/1922564/db48cc7f97b0eb8b_GettyImages-1482118227/i/Taylor-Swift-Eras-Tour-Speak-Now-Costume.jpg',
      description:"Do you think its too much"
   },
     {


       userId:3,
       url:'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1474517429-641830ce2cc16.jpg',
       description:"I love this!"
    
     },
     {


       userId:4,
       url:'https://hips.hearstapps.com/hmg-prod/images/taylor-swift-performs-onstage-during-the-taylor-swift-the-news-photo-1679862307.jpg',
      description:"I am excited"
    
     },
     {


       userId:5,
       url:"https://i.pinimg.com/564x/9c/fe/d8/9cfed80d8bca42c0edc7a74cefd37e3d--rottweiler-pictures-rottweiler-dog.jpg",
       description:"Do I look cute enough"
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
   options.tableName = 'Photos';
   const Op = Sequelize.Op;
   return queryInterface.bulkDelete(options, {
     userId: { [Op.in]: ['1', '2', '3', '4', '5'] }
   }, {});
  
 }
};
