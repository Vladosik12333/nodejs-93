const services = require("../services/user.js");

const createUser = async (req, res) => {
  const createdUser = await services.createUser(req.body);
  res.json({
    createdUser,
  });
};

const loginUser = async (req, res) => {
  const token = await services.loginUser(req.body);

  res.json({
    token,
  });
};

module.exports = {
  createUser,
  loginUser,
};
