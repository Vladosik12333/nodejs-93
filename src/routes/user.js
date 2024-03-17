const express = require("express");
const controllers = require("../controllers/user.js");

const wrapper = require("../helpers/wrapper.js");

const route = express.Router();

route.post("/signup", wrapper(controllers.createUser));

module.exports = route;
