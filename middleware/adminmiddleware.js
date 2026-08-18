function adminMiddleware(req, res, next) {

    if (!req.user) {
        return res.status(401).send("User not authenticated");
    }

    if (req.user.role !== "admin") {
        return res.status(403).send("Only admin can perform this action");
    }

    next();
}

module.exports = adminMiddleware;