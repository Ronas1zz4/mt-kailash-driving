require("dotenv").config();
const Classes = require("../models/Classes");
const User = require("../models/UserDetail");
const {
    sendVerificationEmail
} = require('../utils/send-emails');



const openClasses = async (req, res) => {
    try {
        const openClasses = await Classes.findAllOpen(); // Call the model function
        // console.log(openClasses);
        res.json(openClasses);
    } catch (error) {
        console.error('Error fetching open classes:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
}

const classById = async (req, res) => {
    try {
        const classId = req.params.class_id;
        const classDetails = await Classes.findById(classId);
        console.log(classDetails);
        res.json(classDetails);
    } catch (error) {
        console.error("Error fetching details", error);
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
}

// const userdetail = async (req, res) => {
//     try {
//         const {
//             fname,
//             lname,
//             email
//         } = req.body

//         const existingUser = await User.findByEmail(email);
//         if (existingUser) {
//             return res.status(400).json({
//                 message: "Email already exists. Try differnet email",
//             });
//         }

//         // Generate verification token
//         const verificationToken = jwt.sign({
//                 email,
//             },
//             process.env.JWT_SECRET, {
//                 expiresIn: "1h",
//             }
//         );

//         const userId = await User.create({
//             fname,
//             lname,
//             email,
//             verificationToken,
//         });

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
//         console.error("Error fetching details", error);
//         res.status(500).json({
//             error: 'Internal Server Error'
//         })
//     }
// }



module.exports = {
    openClasses,
    classById,
    //userdetail
};