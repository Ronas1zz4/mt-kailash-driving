"use strict";
const dotenv = require("dotenv").config();
const { verify } = require("jsonwebtoken");
const { hashedPassword } = require("../utils/password");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Admins", [
      {
        firstName: "Ronas",
        lastName: "Tiwari",
        email: "ronas@gmail.com",
        username: "ronas",
        verified: true,
        password: await hashedPassword(process.env.ADMIN_PASSWORD),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Admins", null, {});
  },
};
