const bcrypt = require("bcrypt");

const hashedPassword = async (password) => {
  const hashed = await bcrypt.hash(password, 10);
  return hashed;
};

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = { hashedPassword, comparePassword };
