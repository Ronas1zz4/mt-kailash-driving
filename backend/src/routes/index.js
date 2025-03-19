const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const adminRouter = require("./admin");
const courseRouter = require("./course");
const { checkAuth } = require("../middlewares/authentication");

router.use("/auth", authRouter);
router.use("/admin", checkAuth, adminRouter);
router.use("/courses", courseRouter);
module.exports = router;
