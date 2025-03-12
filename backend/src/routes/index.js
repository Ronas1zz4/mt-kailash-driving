const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const adminRouter = require("./admin");
const { checkAuth } = require("../middlewares/authentication");

router.use("/auth", authRouter);
router.use("/admin", checkAuth, adminRouter);
module.exports = router;
