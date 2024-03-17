require("dotenv").config();

const { PORT = 3000, DB = "" } = process.env;

module.exports = {
  PORT,
  DB,
};
