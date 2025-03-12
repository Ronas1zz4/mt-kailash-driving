const jwt = require("jsonwebtoken");

require("dotenv").config;
const generateToken = (payload, expiresIn, secretKey) => {
  const token = jwt.sign(payload, secretKey, {
    expiresIn: expiresIn,
  });
  return token;
};

const decodeToken = (token, secretKey) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};

module.exports = { generateToken, decodeToken };
