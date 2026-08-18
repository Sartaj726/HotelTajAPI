const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({

    offerName: {
        type: String,
        required: true
    },

    discount: {
        type: Number,
        required: true
    },

    validity: {
        type: Date,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Offer", offerSchema);