const services = require("../services/user.js");

const createUser = async (req, res) => {
  const createdUser = await services.createUser(req.body);
  res.json({
    createdUser,
  });
};
module.exports = {
  createUser,
};
