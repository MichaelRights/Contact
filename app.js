const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const https = require("https");

app.use(express.static("client"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.listen(process.env.PORT || 8080, "0.0.0.0", () => {
  console.log("started");
});

// const privateKey = fs.readFileSync("./ssl/server.key", "utf8");
// const certificate = fs.readFileSync("./ssl/server.crt", "utf8");
// const server = https
//   .createServer(
//     {
//       key: privateKey,
//       cert: certificate,
//     },
//     app,
//   )
//   .listen(8080, "0.0.0.0", () => {
//     console.log("server stared");
//   });
