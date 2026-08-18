const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");

// Get All Bookings
router.get("/", bookingController.getAllBookings);

// Create Booking
router.post("/", bookingController.createBooking);

module.exports = router;