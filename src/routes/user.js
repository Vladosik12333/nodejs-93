const express = require("express");
const controllers = require("../controllers/user.js");

const wrapper = require("../helpers/wrapper.js");
const validation = require("../middlewares/validation.js");
const {
  userSignupShema,
  userSigninShema,
  userIdSchema,
  userUpdateStatusSchema,
} = require("../models/user.js");
const auth = require("../middlewares/auth.js");
const isAdmin = require("../middlewares/isAdmin.js");

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

route.get("/current", auth, wrapper(controllers.currentUser));

route.patch(
  "/statusAdmin/:id",
  validation.params(userIdSchema),
  validation.body(userUpdateStatusSchema),
  auth,
  isAdmin,
  wrapper(controllers.updateUserStatus)
);

module.exports = route;
