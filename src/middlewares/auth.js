const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { getUser } = require("../repositories/user");
const error = require("../helpers/error");

const auth = async (req, _, next) => {
    try {
        const { authorization } = req.headers;
        const [bearer, token] = authorization.split(" ");

        if (bearer !== "Bearer") throw error(401, "Bearer not found.");

        const { id } = jwt.verify(token, JWT_SECRET);
        const user = await getUser({ _id: id });
        if (!user) throw error(401, "Not authorized.");

        req.user = user;
        next();
    } catch (error) {
        next(error(401, error?.message ?? "Not authorized"));
    }
};

module.exports = auth;
