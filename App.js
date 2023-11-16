const express = require("express");
const PORT = process.env.PORT || 1212;
const { urlencoded } = require("body-parser");
const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());
const { ContactMeRoute } = require("./controller/Index");

app.post("/api/contact/me/message", ContactMeRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
