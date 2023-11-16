const express = require("express");
const PORT = process.env.PORT || 1212;
const { urlencoded } = require("body-parser");
const app = express();
const path = require("path");

app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
const { ContactMeRoute } = require("./controller/Index");
const exp = require("constants");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.post("/api/contact/me/message", ContactMeRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
