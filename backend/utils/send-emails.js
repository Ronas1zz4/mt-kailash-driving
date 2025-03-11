require('dotenv').config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationEmail = async (receipt_id, reservationId, amount, receipt_number, userEmail, status) => {
    // const verificationLink = `http://localhost:5001/verify-email?token=${token}`;

    const msg = {
        to: userEmail,
        from: process.env.EMAIL_FROM, // Your verified sender email in SendGrid
        subject: "Your Reciept",
        html: `Reciept number     : ${receipt_number}`,
        html: `User Enail         : ${userEmail}`,
        html: `Receipt Id         : ${receipt_id}`,
        html: `Amount             : ${amount}`,
        html: `Reservation Id     : ${reservationId}`,
        html: `Reservation status : ${status}`,
    };

    try {
        const response = await sgMail.send(msg);
        // console.log("Verification email sent");
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