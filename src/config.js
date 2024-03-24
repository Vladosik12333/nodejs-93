require("dotenv").config();

const { PORT = 3000, DB = "", JWT_SECRET = "" } = process.env;

module.exports = {
  PORT,
  DB,
  JWT_SECRET,
};
