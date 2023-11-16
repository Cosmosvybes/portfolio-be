const { config } = require("dotenv");
config();
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_URL);


const myMessages = client.db("portfolio").collection("messages");
module.exports = { myMessages };
