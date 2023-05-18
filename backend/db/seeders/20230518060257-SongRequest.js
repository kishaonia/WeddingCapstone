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
    options.tableName = 'SongRequests';
    return queryInterface.bulkInsert(options, [
      {
       userId:1,
       songName:"The 1",
       artist:"Taylor Swift"
      },
      {

        userId:2,
        songName:"Lover",
       artist:"Taylor Swift"
    },
      {

        userId:3,
        songName:"invisible string",
        artist:"Taylor Swift"
      
      },
      {

        userId:4,
        songName:"Make You Feel My Love",
       artist:"Adele"
      
      },
      {

        userId:5,
        songName:"When We Were Young",
        artist:"Adele"
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
    options.tableName = 'SongRequests';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: ['1', '2', '3', '4', '5'] }
    }, {});
    
  }
};
