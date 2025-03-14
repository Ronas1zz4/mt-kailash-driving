const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: { user: process.env.MAIL_USERNAME, pass: process.env.MAIL_PASSWORD },
});

const sendEmail = async (payload) => {
  try {
    const { mailTo, subject, html } = payload;
    const mailOptions = {
      from: process.env.MAIL_FROM_EMAIL,
      to: mailTo,
      subject,
      html,
    };
    const info = await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

module.exports = { sendEmail };
