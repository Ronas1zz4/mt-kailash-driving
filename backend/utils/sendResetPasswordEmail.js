require('dotenv').config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendResetPasswordEmail = async (email, token) => {
    console.log(token);
    const verificationLink = `http://localhost:5001/reset-password?token=${token}`;

    const msg = {
        to: email,
        from: process.env.EMAIL_FROM, // Your verified sender email in SendGrid
        subject: "Reset Your Password",
        html: `Click <a href="${verificationLink}">here</a> to reset your password.`,
    };

    try {
        const response = await sgMail.send(msg);
        console.log("Password Reset email sent");
    } catch (error) {
        console.error("Error sending email:", error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};

module.exports = {
    sendResetPasswordEmail
};