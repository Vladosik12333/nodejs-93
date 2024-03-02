const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
const formatLogger = app.get("env") === "dev" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json("myJson");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running_1");
});
