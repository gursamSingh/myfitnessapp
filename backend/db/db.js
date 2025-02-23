// Here we will connect to the MongoDb data base

const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Connected to the database");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;
