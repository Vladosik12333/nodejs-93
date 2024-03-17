const repositories = require("../repositories/user.js");

const error = require("../helpers/error.js");

const bcrypt = require("bcrypt");

const createUser = async (userData) => {
  const foundUser = await repositories.getUser(userData.email);
  if (foundUser) {
    throw error(409, `${foundUser.email} is already used`);
  }

  const hashedPassword = bcrypt.hashSync(
    userData.password,
    bcrypt.genSaltSync(10)
  );

  const readyUserData = {
    ...userData,
    password: hashedPassword,
  };

  const createUser = await repositories.createUser(readyUserData);
  return createUser;
};

module.exports = {
  createUser,
};
