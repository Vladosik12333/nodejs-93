const express = require("express");
const controllers = require("../controllers/user.js");

const wrapper = require("../helpers/wrapper.js");
const validation = require("../middlewares/validation.js");
const { userSignupShema, userSigninShema } = require("../models/user.js");

const route = express.Router();

route.post(
  "/signup",
  validation.body(userSignupShema),
  wrapper(controllers.createUser)
);

route.post(
  "/signin",
  validation.body(userSigninShema),
  wrapper(controllers.loginUser)
);

module.exports = route;
