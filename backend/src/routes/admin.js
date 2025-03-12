const express = require("express");
const { updatePassword } = require("../controllers/admin");
const router = express.Router();

router.post("/changePassword", updatePassword);

module.exports = router;
