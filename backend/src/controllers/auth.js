const { comparePassword, hashedPassword } = require("../utils/password");
const { generateToken, decodeToken } = require("../utils/token");
const { uniqueOtp, checkValidOtp } = require("../utils/otp");
const { sendEmail } = require("../utils/mail");
const { compileHandlebars } = require("../utils/handlebars");
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

const forgetPasswordMail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const findUser = await Admin.findOne({ where: { email: email } });

    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { otp, expiry } = await uniqueOtp(6);

    await findUser.update({ otp, otpExpireAt: expiry });
    const emailPayload = {
      mailTo: findUser.email,
      subject: "Reset Your Password",
      html: compileHandlebars({
        title: "Reset Password",
        fullName: findUser.firstName + " " + findUser.lastName,
        message:
          "We received a request to reset your password. If you made this request, please reset your password using the otp bellow",
        otp: otp,
        valid: "1 Hour",
      }),
    };

    await sendEmail(emailPayload);

    return res
      .status(200)
      .json({ success: true, message: "Mail sent successfully" });
  } catch (error) {
    console.error("Error in forgetPasswordMail:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const verifyPasswordResetOtp = async (req, res) => {
  try {
    const { otp, email } = req.body;
    if (!otp || !email) {
      return res
        .status(400)
        .json({ success: false, message: "OTP and email must be provided" });
    }
    const findUser = await Admin.findOne({ where: { email: email } });
    console.log(findUser);

    if (!findUser) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid OTP or Email" });
    }
    if (!checkValidOtp(findUser.otpExpireAt)) {
      return res.status(400).json({ success: false, message: "OTP Expired" });
    }

    return res.status(200).json({ success: true, message: "Valid OTP" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { otp, newPassword, confirmPassword } = req.body;
    if (!newPassword || !confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Password must be provided" });
    }
    if (newPassword !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Password does not match" });
    }
    const findUser = await Admin.findOne({ where: { otp: otp } });
    if (!findUser) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    const hashPassword = await hashedPassword(newPassword);
    findUser.password = hashPassword;
    await findUser.save();
    return res
      .status(200)
      .json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  login,
  refreshTokens,
  forgetPasswordMail,
  verifyPasswordResetOtp,
  resetPassword,
};
