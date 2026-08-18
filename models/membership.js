const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({

    memberName: {
        type: String,
        required: true
    },

    membershipType: {
        type: String,
        required: true
    },

    validity: {
        type: Date,
        required: true
    },

    points: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Membership", membershipSchema);