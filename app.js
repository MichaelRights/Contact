const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(8080, "0.0.0.0", () => {
  console.log("server started");
});
