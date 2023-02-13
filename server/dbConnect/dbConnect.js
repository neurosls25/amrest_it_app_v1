require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_DEV_URL = process.env.MONGO_DEV_URL;

const mongoConnect = () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_DEV_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log("database connected");
    });
  } catch (error) {
    throw new Error({ msg: error.message });
  }
};

module.exports = mongoConnect
