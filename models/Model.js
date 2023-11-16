const { myMessages } = require("../utils/mongodb.js");

const messageSchema = async (email, message) => {
  const data = await myMessages.insertOne({ email, message });
  return data;
};

module.exports = { messageSchema };
