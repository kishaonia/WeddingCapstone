'use strict';
/** @type {import('sequelize-cli').Migration} */
let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Comments",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Users",
            key: "id",
          },
          onDelete: "CASCADE",
        },
        registryId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Registries",
            key: "id",
          },
          onDelete: "CASCADE",
        },
        comment: {
          type: Sequelize.STRING,
        },
        like: {
          type: Sequelize.INTEGER,
        },
        file: {
          type: Sequelize.BLOB,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Comments";
    await queryInterface.dropTable(options);
  }
};