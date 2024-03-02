const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json("myJson");
});

app.listen(3000, () => {
  console.log("Server is running_1");
});
