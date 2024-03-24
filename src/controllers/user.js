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

const currentUser = async (req, res) => {
    const user = await services.currentUser(req.user);
    res.json({
        user,
    });
};

module.exports = {
    createUser,
    loginUser,
    currentUser,
};
