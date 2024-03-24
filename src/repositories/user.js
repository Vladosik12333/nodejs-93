const { User } = require("../models/user.js");

const getUser = async (filter) => {
  const user = await User.findOne(filter);
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
