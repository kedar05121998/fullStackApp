const mongoose = require("mongoose");

const Doctor = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  appTime: { type: String, required: true },
});
const UserModel = mongoose.model("users", Doctor);
module.exports = { UserModel };
