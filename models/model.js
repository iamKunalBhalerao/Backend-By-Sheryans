const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const UserModel = model("users", userSchema);

module.exports = {
  UserModel,
};
