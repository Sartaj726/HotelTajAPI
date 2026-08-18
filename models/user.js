const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        phone: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true,
            minlength: 6
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true
        },

        age: {
            type: Number,
            required: true
        },

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        }
    }
);

module.exports = mongoose.model("User", userSchema);