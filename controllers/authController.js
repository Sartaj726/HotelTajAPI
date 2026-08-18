const User = require("../models/User");


// Signup
async function signup(req, res) {
    try {

        const {
            fullName,
            email,
            phone,
            password,
            gender,
            age
        } = req.body || {};

        // Check required fields
        if (
            !fullName ||
            !email ||
            !phone ||
            !password ||
            !gender ||
            !age
        ) {
            return res.status(400).send("All fields are required");
        }

        // Check existing user
        const findUser = await User.findOne({
            email: email
        });

        if (findUser) {
            return res.status(400).send("User already exists");
        }

        // Create user
        const newUser = await User.create({
            fullName: fullName,
            email: email,
            phone: phone,
            password: password,
            gender: gender,
            age: age
        });

        return res.status(201).send({
            message: "User Signed Up Successfully",
            data: newUser
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Login
async function login(req, res) {
    try {

        const {
            email,
            password
        } = req.body || {};

        // Check required fields
        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }

        // Find user
        const findUser = await User.findOne({
            email: email
        });

        if (!findUser) {
            return res.status(401).send("Wrong email or password");
        }

        // Check password
        if (findUser.password !== password) {
            return res.status(401).send("Wrong email or password");
        }

        return res.status(200).send({
            message: "Login Successful",
            data: findUser
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Logout
async function logout(req, res) {
    try {

        return res.status(200).send("User Logged Out Successfully");

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Profile
async function profile(req, res) {
    try {

        const userId = req.params.id;

        const findUser = await User.findById(userId);

        if (!findUser) {
            return res.status(404).send("User not found");
        }

        return res.status(200).send({
            message: "User Profile",
            data: findUser
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    signup,
    login,
    logout,
    profile
};