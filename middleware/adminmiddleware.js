const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {

    try {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).send("Access token is required");
        }

        const tokenData = token.split(" ")[1];

        if (!tokenData) {
            return res.status(401).send("Invalid token");
        }

        const decoded = jwt.verify(
            tokenData,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).send("Invalid or expired token");
    }
}

module.exports = authMiddleware;