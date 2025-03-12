// check authentication middleware
const { decodeToken } = require("../utils/token");
const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = decodeToken(token, process.env.SECRET_KEY_ACCESS);
    if (!payload) {
      return res.status(401).json({ success: false, message: "Invalid Token" });
    }
    req.user = payload;
    next();
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { checkAuth };
