const error = require("../helpers/error");

const isAdmin = async (req, _, next) => {
  try {
    const { admin } = req.user;
    if (!admin) throw error(403, "User is not admin");

    next();
  } catch (e) {
    next(error(403, e?.message ?? "User is not admin"));
  }
};

module.exports = isAdmin;
