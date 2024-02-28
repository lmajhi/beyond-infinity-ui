const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "build")));

app.get("/alive", function (req, res) {
  res.send("UP");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
