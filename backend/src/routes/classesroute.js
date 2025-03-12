const express = require("express");
const router = express.Router();
const {
    openClasses,
    classById,
    // userdetail
} = require('../controllers/classes');

// Register
router.get('/classes', openClasses);
router.get('/classes/:class_id', classById);
// router.post('/classes/userdetail', userdetail)



module.exports = router;