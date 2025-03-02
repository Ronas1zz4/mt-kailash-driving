const express = require("express");
const router = express.Router();
const {
    // register,
    // login,
    verifyEmail,
    // forgotPassword,
    // resetPassword,
} = require('../controllers/authControllers');

// Register
// router.post('/register', register);
// router.post('/login', login);
router.get('/verify-email', verifyEmail);
// router.post('/forgot-password', forgotPassword);
// router.post('/reset-password', resetPassword);


module.exports = router;