const { Admin } = require("../models");
const { comparePassword, hashedPassword } = require("../utils/password");

const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if (oldPassword === newPassword) {
      return res.status(400).json({
        success: false,
        message: "Old password and new password cannot be same",
      });
    }
    const { id } = req.user;
    const user = await Admin.findByPk(id);
    const isValidPassword = await comparePassword(oldPassword, user.password);
    if (!isValidPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid old password" });
    }
    const newHashPassword = await hashedPassword(newPassword);
    user.password = newHashPassword;
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { updatePassword };
