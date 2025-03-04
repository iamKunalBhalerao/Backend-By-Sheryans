const express = require("express");
const { UserModel } = require("./models/model");
const dbConnection = require("./config/db");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/signup", async (req, res) => {
  res.render("signup");
  try {
    await UserModel.create(req.body);
    res.status(200).json({
      message: "User Created",
      date: req.body,
    });
  } catch (e) {
    res.status(403).json({
      messsage: "Some Error Occured",
    });
  }
});

function main() {
  app.listen(3000, () => {
    console.log("server is on PORT:3000");
  });
}
main();
