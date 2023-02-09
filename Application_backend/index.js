const express = require("express");
const cors = require("cors");
const { UserModel } = require("./Models/doctor.model");
// const { Connection } = require("./Config/db");
// const mongoose = require("mongoose");
const { Connection } = require("./Config/db");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/user", async (req, res) => {
  const { name, email, phone, date, appTime } = req.body;

  const data = await new UserModel({ name, email, phone, date, appTime });
  data.save();
  res.send(data);
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.send({ message: "Patient Deleted Successfully!!" });
  } catch (error) {
    res.status(400).send({ message: "Something Went Wrong" });
  }
});

app.get("/appointment", async(req, res) => {
    let appointment=await UserModel.find()
    res.send(appointment)
  });

// mongoose.set("strictQuery", true);

app.listen(PORT, async () => {
  try {
    await Connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log("error in connectiong");
    console.log(err);
  }
  console.log(`Listenging to PORT http://localhost:${PORT}`);
});
