// Import required modules and dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const request = require("request");
const path = require("path");
const axios = require("axios");
const mongoose = require("mongoose");
const DownloadCount = require("./models/downloadCount");

require("dotenv").config(); // Load environment variables from .env

// Create an Express application
const app = express();

// Define the port for your server to listen on
const port = process.env.PORT || 5000;

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());
//Middleware
app.use(express.json());
// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Define a route to handle a POST request for sending an email
app.post("/send_email", (req, res) => {
  // Extract data from the request body (assuming it contains email-related information)
  const { firstName, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use a relevant email service (e.g., "Gmail" for Gmail)
    auth: {
      user: process.env.EMAIL_USER, // Your email address from .env
      pass: process.env.EMAIL_PASSWORD, // Your email password from .env
    },
    to: process.env.RECIPIENT_EMAIL,
  });

  // Define email data
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: "New Contact Form Submission",
    html: `
      <h3>Contact Form Details:</h3>
      <p>First Name: ${firstName}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
});

//Newsletter
app.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    // Prepare the Mailchimp API request data
    const audienceId = process.env.AUDIENCE_ID;
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const data = {
      members: [
        {
          email_address: email,
          status: "subscribed",
        },
      ],
    };

    // Make a POST request to Mailchimp API to subscribe the user
    const response = await axios.post(
      `https://${process.env.DC}.api.mailchimp.com/3.0/lists/${audienceId}`,
      data,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`apikey:${apiKey}`).toString(
            "base64"
          )}`,
        },
      }
    );

    // If the subscription is successful, Mailchimp API returns a 200 response
    if (response.status === 200) {
      res
        .status(200)
        .json({ message: "Successfully subscribed to newsletter." });
    } else {
      res
        .status(500)
        .json({ message: "Failed to subscribe. Please try again later." });
    }
  } catch (error) {
    console.error("Error subscribing:", error);
    res
      .status(500)
      .json({ message: "Failed to subscribe. Please try again later." });
  }
});

// Create a route to increment the download count
app.post("/api/increment-download-count", async (req, res) => {
  try {
    // Find the download count document and increment the count by 1
    const result = await DownloadCount.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { upsert: true, new: true }
    );

    res.json({ downloadCount: result.count });
  } catch (error) {
    console.error("Error incrementing download count:", error);
    res.status(500).json({ error: "Failed to increment download count" });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the connection is successful
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
