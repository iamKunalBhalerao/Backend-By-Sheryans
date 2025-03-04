const mongoose = require("mongoose");

const connection = mongoose
  .connect(
    "mongodb+srv://kunalbhalerao789:kunal%400987654321@cluster01.hm8ab.mongodb.net/backend-by-sheryians"
  )
  .then(() => {
    console.log("connected to Database");
  });

module.exports = connection;
