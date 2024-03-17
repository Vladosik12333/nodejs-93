const { User } = require("../models/user.js");

const getUser = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

module.exports = {
  getUser,
  createUser,
};
