const express = require("express");
const controllers = require("../controllers/product.js");
const wrapper = require("../helpers/wrapper.js");
const auth = require("../middlewares/auth.js");
const isAdmin = require("../middlewares/isAdmin.js");
const validation = require("../middlewares/validation.js");
const { productCreateSchema } = require("../models/product.js");

const route = express.Router();

route.get("/", auth, wrapper(controllers.getProducts));

route.post(
  "/",
  auth,
  isAdmin,
  validation.body(productCreateSchema),
  wrapper(controllers.createProduct)
);

module.exports = route;
