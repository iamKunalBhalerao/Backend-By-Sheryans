const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "This is intro to the express JS",
  });
});

app.get("/about", (req, res) => {
  res.json({
    message: "This is about Page",
  });
});

app.get("/profile", (req, res) => {
  res.json({
    message: "This is Profile Page",
  });
});

app.post("/signin", (req, res) => {
  res.json({
    message: "This is POST request Page",
  });
});

app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
