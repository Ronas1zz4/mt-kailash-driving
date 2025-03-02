const express = require("express");
const router = express.Router();
const {
    userdetail
} = require('../controllers/userdetail');

// Register
router.post('/userdetail', userdetail);



module.exports = router;