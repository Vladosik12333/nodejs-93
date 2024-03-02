const error = require("./src/helpers/error.js");

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const wrapper = require("./src/helpers/wrapper.js");

const app = express();
const formatLogger = app.get("env") === "dev" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("success");
});

app.get(
  "/car",
  wrapper((req, res) => {
    throw error(402, "my error 2");
  })
);

app.use((_, res) => {
  res.status(404).json({ message: "not found" });
});

app.use((error, _, res, __) => {
  const { status = 500, message = "Server internal error" } = error;
  res.status(status).json({ message, status });
});

app.listen(process.env.PORT, () => {
  //  console.log("Server is running_1");
});
// 1. Make structure within app.js, config.js in the src folder.
// 2. Create DB relationship for entities.
// 3. Create 1st entity
