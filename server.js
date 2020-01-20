const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello Le World");
});
app.listen(3000, () => {
  console.log("Listening on Port 3000");
  console.log("   http://localhost:3000");
});
