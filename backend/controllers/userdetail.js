require("dotenv").config();
const jwt = require('jsonwebtoken');
const User = require("../models/UserDetail");
const {
    sendVerificationEmail
} = require('../utils/send-emails');

const userdetail = async (req, res) => {
    try {
        const {
            fname,
            lname,
            email
        } = req.body

        const existingUser = await User.findByEmail(email);
        console.log(fname, lname, email)
        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists. Try differnet email",
            });
        }

        // Generate verification token
        const verificationToken = jwt.sign({
                email,
            },
            process.env.JWT_SECRET, {
                expiresIn: "1h",
            }
        );

        const userId = await User.create({
            first_name: fname, // Ensure correct key names
            last_name: lname,
            email,
        });

        try {
            await sendVerificationEmail(email, verificationToken);
            res.status(201).json({
                message: "User registered. Please check your email to verify.",
            });
        } catch (error) {
            console.error("Error in email sending:", error); // Log any error in sending email
            return res.status(500).json({
                message: "Email sending failed",
                error: error.message,
            });
        }



    } catch (error) {
        console.error("Error fetching details", error);
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
}
module.exports = {
    userdetail
}