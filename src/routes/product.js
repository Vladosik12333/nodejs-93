const express = require("express");
const controllers = require("../controllers/product.js");
const wrapper = require("../helpers/wrapper.js");

const route = express.Router();

route.get("/", wrapper(controllers.getProducts));

module.exports = route;
