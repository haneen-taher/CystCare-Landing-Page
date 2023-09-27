// server/routes/contact.js
const express = require("express");
const sendEmail = require("../sendEmail");

const router = express.Router();

router.post("/send_email", (req, res) => {
  const formData = req.body;

  sendEmail(formData);

  res.json({ message: "Email sent successfully" });
});

module.exports = router;
