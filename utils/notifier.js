const nodemailer = require("nodemailer");
const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alfredchrisayo@gmail.com",
    pass: process.env.PASS,
  },
});
module.exports = { mailTransporter };
