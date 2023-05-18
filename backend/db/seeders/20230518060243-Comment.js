'use strict';
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
    options.tableName = 'Comments';
    return queryInterface.bulkInsert(options, [
      {
       userId:1,
       registryId:1,
       comment:"Congratulations!"
      },
      {

        userId:2,
        registryId:2,
        comment:"She remembers it all too well"
    },
      {

        userId:3,
       registryId:3,
       comment:"Nice!"
      
      },
      {

        userId:4,
        registryId:4,
        comment:"cool"
        
      },
      {

        userId:5,
       registryId:5,
       comment:"I love it!"
        
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
    options.tableName = 'Comments';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        comment: {
          [Op.in]: [
            "Congratulations!",
            "She remembers it all too well",
            "Nice!",
            "cool",
            "I love it!",
          ],
        },
      },
      {}
    );
  }
};
