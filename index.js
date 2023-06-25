const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen("8080", () => {
  console.log("Server started at port 8080");
});
