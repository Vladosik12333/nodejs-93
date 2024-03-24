const { User } = require("../models/user.js");

const getUser = async (filter) => {
  const user = await User.findOne(filter);
  return user;
};

const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};
const updateUser = async (id, userData) => {
  const user = await User.findByIdAndUpdate(id, userData, { new: true });

  return user;
};
module.exports = {
  getUser,
  createUser,
  updateUser,
};
