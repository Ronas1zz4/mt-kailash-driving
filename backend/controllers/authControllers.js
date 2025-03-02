require("dotenv").config();
// const User = require("../models/User");
const User = require("../models/UserDetail");
const bcrypt = require("bcrypt");
const {
    sendVerificationEmail
} = require('../utils/send-emails');
const {
    sendResetPasswordEmail
} = require('../utils/sendResetPasswordEmail');
const createHash = require('../utils/createHash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');



// const register = async (req, res) => {
//     try {
//         const {
//             name,
//             email,
//             password
//         } = req.body;
//         // Check if user already exists
//         const existingUser = await User.findByEmail(email);
//         if (existingUser) {
//             return res.status(400).json({
//                 message: "User already exists",
//             });
//         }

//         // Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         console.log("hashedpassword:", hashedPassword);

//         // Generate verification token
//         const verificationToken = jwt.sign({
//                 email,
//             },
//             process.env.JWT_SECRET, {
//                 expiresIn: "1h",
//             }
//         );
//         console.log("verificationToken:", verificationToken);

//         // Create a new user
//         const userId = await User.create({
//             name,
//             email,
//             password: hashedPassword,
//             verificationToken,
//         });

//         console.log(userId);

//         // Send verification email
//         try {
//             await sendVerificationEmail(email, verificationToken);
//             res.status(201).json({
//                 message: "User registered. Please check your email to verify.",
//             });
//         } catch (error) {
//             console.error("Error in email sending:", error); // Log any error in sending email
//             return res.status(500).json({
//                 message: "Email sending failed",
//                 error: error.message,
//             });
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: "Something went wrong",
//         });
//     }
// };

// Verify Email
const verifyEmail = async (req, res) => {
    const {
        token
    } = req.query;

    try {

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByEmail(decoded.email);

        console.log(user);
        if (!user) {
            return res.status(400).json({
                message: "Invalid token",
            });
        }

        // Mark user as verified
        await User.markAsVerified(user.id);


        res.status(200).json({
            success: ture,
            message: "Email verified successfully",
            redirectUrl: '/checkout',
        });
    } catch (error) {
        res.status(400).json({
            message: "Invalid or expired token",
        });
    }
};

// Login
// const login = async (req, res) => {
//     try {
//         const {
//             email,
//             password
//         } = req.body;



//         // Find the user
//         const user = await User.findByEmail(email);
//         if (!user) {
//             return res.status(400).json({
//                 message: "Invalid credentials",
//             });
//         }

//         // Check if email is verified
//         if (!user.is_verified) {
//             return res.status(400).json({
//                 message: "Please verify your email first",
//             });
//         }
//         00

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({
//                 message: "Invalid credentials",
//             });
//         }


//         // Generate JWT
//         const token = jwt.sign({
//                 userId: user.id,
//                 email: user.email,
//             },
//             process.env.JWT_SECRET, {
//                 expiresIn: "1h",
//             }
//         );

//         // Send token in the header
//         res.setHeader("Authorization", `Bearer ${token}`);

//         res.status(200).json({
//             message: "Log In Successful!!",
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "Something went wrong",
//         });
//     }
// };

// const forgotPassword = async (req, res) => {
//     const {
//         email
//     } = req.body;
//     if (!email) {
//         return res.send('Please provide valid email')
//     }

//     const user = await User.findByEmail(email);



//     if (!user) {
//         return res.status(400).json({
//             message: "Invalid email or token"
//         });
//     }


//     const passwordToken = crypto.randomBytes(70).toString('hex');

//     // send email
//     //const origin = 'http://localhost:3000';
//     await sendResetPasswordEmail(user.email, passwordToken);

//     const tenMinutes = 1000 * 60 * 10;
//     const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);

//     hashedPasswordToken = createHash(passwordToken);
//     await User.updatePasswordToken(email, hashedPasswordToken, passwordTokenExpirationDate);


//     res
//         .status(200)
//         .json({
//             "token": passwordToken,
//             "email": email,
//             "msg": 'Please check your email for reset password link'
//         });
// };

// const resetPassword = async (req, res) => {
//     try {
//         const {
//             token,
//             email,
//             password
//         } = req.body;

//         if (!token || !email || !password) {
//             res.send("Missing required fields")
//         }

//         const user = await User.findByEmail(email);

//         if (!user) {
//             return res.status(400).json({
//                 message: "Invalid email or token"
//             });
//         }

//         console.log(user);
//         const currentDate = new Date();

//         console.log(user.password_token);
//         console.log(user.password_token_expiration_date);
//         console.log(currentDate);
//         console.log(createHash(token));


//         if (
//             user.password_token === createHash(token) &&
//             user.password_token_expiration_date > currentDate
//         ) {
//             console.log('first check point')
//             // Hash new password before storing
//             const hashedPassword = await bcrypt.hash(password, 10);

//             await User.passwordReset(user.email, hashedPassword);



//             return res.status(200).json({
//                 message: "Password reset successful"
//             });
//         }

//         return res.status(400).json({
//             message: "Invalid or expired token"
//         });
//     } catch (error) {
//         console.error("Error resetting password:", error);
//         res.status(500).json({
//             message: "Internal server error"
//         });
//     }
// };




module.exports = {
    // register,
    // login,
    verifyEmail,
    // forgotPassword,
    // resetPassword,
};