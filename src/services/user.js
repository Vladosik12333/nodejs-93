const repositories = require("../repositories/user.js");
const jsonToken = require("jsonwebtoken");
const error = require("../helpers/error.js");
const { JWT_SECRET } = require("../config.js");
const bcrypt = require("bcrypt");

const createUser = async (userData) => {
  const foundUser = await repositories.getUser({ email: userData.email });
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

const loginUser = async (userData) => {
  const { _id, password } = await repositories.getUser({
    email: userData.email,
  });
  const checkedPass = await bcrypt.compare(userData.password, password);

  if (!checkedPass) throw error(401, `email or password is wrong`);

  const payload = {
    id: _id,
  };
  const token = jsonToken.sign(payload, JWT_SECRET, { expiresIn: "7d" });

  return token;
};

const currentUser = async (userData) => {
  return {
    email: userData.email,
    admin: userData.admin,
  };
};

const updateUserStatus = async (id, userData) => {
  const user = await repositories.updateUser(id, userData);
  if (!user) throw error(400, "User not found");
  return {
    email: user.email,
    admin: user.admin,
  };
};

module.exports = {
  createUser,
  loginUser,
  currentUser,
  updateUserStatus,
};
