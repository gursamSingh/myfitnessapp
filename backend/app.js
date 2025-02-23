const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");

connectToDb();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World From the Server");
});

// app.use("/users", userRoutes);

module.exports = app;
