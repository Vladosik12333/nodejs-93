const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const route = require("./routes/user");
const routeProducts = require("./routes/product");

const app = express();
const formatLogger = app.get("env") === "dev" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", route);
app.use("/api/products", routeProducts);

app.use((_, res) => {
  res.status(404).json({ message: "not found" });
});

app.use((error, _, res, __) => {
  const { status = 500, message = "Server internal error" } = error;
  res.status(status).json({ message, status });
});

module.exports = app;
// 3. Create 1st entity
