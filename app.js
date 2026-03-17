const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./models/user");

app.use(cors());
app.use(express.json());

// 👇 ye line important
app.use(express.static("public"));

console.log("App.js loaded ✅");

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

module.exports = app;