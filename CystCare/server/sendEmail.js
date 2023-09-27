// server/sendEmail.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function sendEmail(formData) {
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("RECIPIENT_EMAIL:", process.env.RECIPIENT_EMAIL);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: "New Contact Form Submission",
    html: `
      <h3>Contact Details:</h3>
      <p>First Name: ${formData.firstName}</p>
      <p>Email: ${formData.email}</p>
      <p>Message: ${formData.message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

module.exports = sendEmail;
