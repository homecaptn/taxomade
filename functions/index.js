const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
require("dotenv").config();

// Create the transporter using Google Workspace SMTP
// It will use process.env.SMTP_USER and process.env.SMTP_PASS for local dev
// In production, we will use defineSecret or process.env
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "info@taxomade.com",
    pass: process.env.SMTP_PASS, // The Google App Password
  },
});

exports.submitContactForm = onRequest({ cors: true, maxInstances: 10 }, async (req, res) => {
  // Use CORS middleware manually if needed, though v2 onRequest { cors: true } handles it automatically for the most part.
  // We'll wrap in cors just to be 100% safe if called directly.
  cors(req, res, async () => {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    try {
      const { name, email, origin, destination, message, configurator_data, _autoresponse } = req.body;

      if (!name || !email) {
        res.status(400).json({ error: "Name and email are required" });
        return;
      }

      // 1. Send the lead notification to info@taxomade.com
      const leadMailOptions = {
        from: '"Taxomade Website" <info@taxomade.com>',
        to: "info@taxomade.com",
        subject: "New Contact Request - taxomade.com",
        text: `
New contact request from Taxomade website:

Name: ${name}
Email: ${email}
Current Country: ${origin || 'Not provided'}
Destination: ${destination || 'Not provided'}

Message:
${message || 'No message provided'}

Configurator Data:
${configurator_data || 'None'}
        `,
      };

      await transporter.sendMail(leadMailOptions);
      logger.info("Lead email sent to info@taxomade.com");

      // 2. Send the auto-response to the customer
      if (_autoresponse) {
        const customerMailOptions = {
          from: '"Taxomade" <info@taxomade.com>',
          to: email,
          replyTo: "info@taxomade.com",
          subject: "We received your request - Taxomade",
          text: _autoresponse,
        };

        await transporter.sendMail(customerMailOptions);
        logger.info(`Autoresponse email sent to ${email}`);
      }

      res.status(200).json({ success: true, message: "Request sent successfully." });
    } catch (error) {
      logger.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
  });
});
