const authMiddleware = require("../middleware/authmiddleware");
const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");


// Signup
router.post("/signup", authController.signup);


// Login
router.post("/login", authController.login);


// Logout
router.post("/logout", authController.logout);


// Profile
router.get("/profile/:id", authController.profile);


module.exports = router;