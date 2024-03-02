const error = require("./src/helpers/error.js");

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
const formatLogger = app.get("env") === "dev" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());
app.get("/", (req, res, next) => {
  const myerror = error(401, "my error 1");

  next(myerror);
  return;
  res.json("myJson");
});

app.get("/car", (req, res, next) => {
  const myerror = error(402, "my error 2");

  next(myerror);
  return;
  res.json("my car");
});

app.use((_, res) => {
  res.status(404).json({ message: "not found" });
});

app.use((error, _, res, __) => {
  const { status = 500, message = "Server internal error" } = error;
  res.status(status).json({ message, status });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running_1");
});
