require('dotenv').config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationEmail = async (email, token) => {
    const verificationLink = `http://localhost:5001/verify-email?token=${token}`;

    const msg = {
        to: email,
        from: process.env.EMAIL_FROM, // Your verified sender email in SendGrid
        subject: "Verify Your Email",
        html: `Click <a href="${verificationLink}">here</a> to verify your email.`,
    };

    try {
        const response = await sgMail.send(msg);
        console.log("Verification email sent");
    } catch (error) {
        console.error("Error sending email:", error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};

module.exports = {
    sendVerificationEmail
};