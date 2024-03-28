const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen("5000");
