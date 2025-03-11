const express = require("express");
const router = express.Router();
const {
    payment,
    success
} = require('../controllers/stripe');

// Register
router.post('/create-checkout-session', payment);

router.get('/payment-success/:receipt_id', success);

module.exports = router;