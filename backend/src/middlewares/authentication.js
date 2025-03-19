// check authentication middleware
const { decodeToken } = require("../utils/token");
const checkAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ success: false, message: "Please Login" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const payload = decodeToken(token, process.env.SECRET_KEY_ACCESS);
    if (!payload) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    req.user = payload;
    next();
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { checkAuth };
