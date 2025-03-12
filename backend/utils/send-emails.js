require('dotenv').config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationEmail = async (receipt_id, reservationId, amount, receipt_number, userEmail, status) => {
    // const verificationLink = `http://localhost:5001/verify-email?token=${token}`;

    const msg = {
        to: userEmail,
        from: process.env.EMAIL_FROM, // Your verified sender email in SendGrid
        subject: "Your Reciept",
        html: `
        <p><strong>Receipt number</strong>: ${receipt_number}</p>
        <p><strong>User Email</strong>: ${userEmail}</p>
        <p><strong>Receipt Id</strong>: ${receipt_id}</p>
        <p><strong>Amount</strong>: ${amount}</p>
        <p><strong>Reservation Id</strong>: ${reservationId}</p>
        <p><strong>Reservation status</strong>: ${status}</p>
    `,
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