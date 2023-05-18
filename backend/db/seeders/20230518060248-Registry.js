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
    options.tableName = 'Registries';
    return queryInterface.bulkInsert(options, [
      {
       userId:1,
       registryItem:1,
       url:"https://iheartdogs.com/wp-content/uploads/2023/03/rottweiler-g54bbf41ab_1280.jpg"
      },
      {
        userId:2,
        registryItem:2,
        url:"https://1.bp.blogspot.com/-J0Fhz8cbrJU/VjWHoWn5b9I/AAAAAAAABSw/cm4E9aY8lhc/s1600/rottweiler-dog-close-up.jpg"
    },
      {
        userId:3,
        registryItem:3,
        url:"https://www.akc.org/wp-content/uploads/2017/11/Rottweiler-puppy-6-weeks-old-sitting-on-a-white-background.jpg"
      
      },
      {
        userId:4,
        registryItem:4,
        url:"https://cdn.britannica.com/70/234470-050-F25D5205/Rottweiler-dog.jpg"
      },
      {
        userId:5,
        registryItem:5,
        url:"https://usserviceanimals.org/blog/wp-content/uploads/2021/06/an-obedient-rottweiler.jpg"
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
    options.tableName = 'Registries';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: ['1', '2', '3', '4', '5'] }
    }, {});
  }
};
