"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {}
  }
  Admin.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      verified: DataTypes.BOOLEAN,
      otp: DataTypes.STRING,
      otpExpireAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
