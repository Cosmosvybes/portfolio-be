const { messageSchema } = require("../models/Model.js");
const { mailTransporter } = require("../utils/notifier.js");

const ContactMeRoute = async (req, res) => {
  const { email, message } = req.body;
  if (!email || !message)
    res.status(403).send({ response: "complete the the data" });
  else {
    try {
      const newMessageData = await messageSchema(email, message);
      if (newMessageData.insertedId) {
        await mailTransporter.sendMail({
          to: "alfredchrisayo@gmail.com",
          subject: "New message from my website",
          text: `${email} - ${message}`,
          sender: email,
        });
        res.send({
          response: "message successfully sent!",
          newMessageData,
        });
      }
    } catch (error) {
      res.status(503).send({ response: "internal error, try again!" });
    }
  }
};

module.exports = { ContactMeRoute };
