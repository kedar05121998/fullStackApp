const mongoose = require("mongoose");
require("dotenv").config()

mongoose.set('strictQuery', true)

const Connection = mongoose.connect(process.env.DB_URL);

module.exports = { Connection };