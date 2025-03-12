const { comparePassword, hashedPassword } = require("../utils/password");
const { generateToken, decodeToken } = require("../utils/token");
const { Admin } = require("../models");
require("dotenv").config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await Admin.findOne({ where: { email } });
    if (!findUser) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credentials " });
    }
    const passwordMatched = await comparePassword(password, findUser.password);
    if (!passwordMatched) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credentials " });
    }
    if (!findUser.verified) {
      return res.status(401).json({
        success: false,
        message: "Email Not Verified Check Mail",
      });
    }
    const payload = { id: findUser.id };
    const accessToken = generateToken(
      payload,
      "1d",
      process.env.SECRET_KEY_ACCESS
    );
    const refreshToken = generateToken(
      payload,
      "7d",
      process.env.SECRET_KEY_REFRESH
    );

    return res.json({
      success: true,
      message: "login successful",
      token: { accessToken, refreshToken },
    });
  } catch (err) {
    if (err)
      return res.status(500).json({ success: false, message: err.message });
  }
};

const refreshTokens = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res
        .status(401)
        .json({ success: false, message: "No refresh token provided" });
    }
    const payload = decodeToken(refreshToken, process.env.SECRET_KEY_REFRESH);
    if (!payload) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid refresh tokens" });
    }
    const newAccessToken = generateToken(
      { id: payload.id },
      "1d",
      process.env.SECRET_KEY_ACCESS
    );
    const newRefreshToken = generateToken(
      { id: payload.id },
      "7d",
      process.env.SECRET_KEY_REFRESH
    );
    return res.json({
      success: true,
      token: { accessToken: newAccessToken, refreshToken: newRefreshToken },
    });
  } catch (refreshErr) {
    return res
      .status(500)
      .json({ success: false, message: refreshErr.message });
  }
};

// const registerAdmin = async (req, res) => {
//   try {
//     const { firstName, lastName, username, email, password } = req.body;

//     const hashedPassword = hashedPassword(password);

//     const admin = await Admin.create({
//       firstName,
//       lastName,
//       username,
//       email,
//       password,
//     });
//     return res.status(201).json({ success: true, data: admin });
//   } catch (err) {
//     return res.status(500).json({ success: false, message: err.message });
//   }
// };
module.exports = {
  login,
  refreshTokens,
};
