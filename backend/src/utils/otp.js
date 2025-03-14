const { where } = require("sequelize");
const { Admin } = require("../models");
const generateOtp = (n) => {
  const d = new Date();
  const otp = Math.floor(
    Math.pow(10, n - 1) + Math.random() * 9 * Math.pow(10, n - 1)
  );
  return otp;
};

const setOtpExpire = (day = 1) => {
  const d = new Date();
  const otpExpireTime = new Date(d.setDate(d.getDate() + day));
  return otpExpireTime;
};

const uniqueOtp = async (n = 6) => {
  let otp = generateOtp(n);
  let isUnique = false;

  while (!isUnique) {
    const user = await Admin.findOne({ where: { otp } });
    if (!user) {
      isUnique = true;
    } else {
      otp = generateOtp(n);
    }
  }

  return { otp: otp.toString(), expiry: setOtpExpire() };
};

const checkValidOtp = (otpExpiry) => {
  return new Date() < otpExpiry;
};

module.exports = { uniqueOtp, checkValidOtp };
