const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("client"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.listen(process.env.PORT || 8080, "0.0.0.0", () => {
  console.log("server started");
});
