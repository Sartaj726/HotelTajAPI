const Booking = require("../models/booking");

// Create Booking
async function createBooking(req, res) {
    try {

        const {
            customerName,
            email,
            phone,
            roomNumber,
            roomType,
            checkIn,
            checkOut
        } = req.body;

        // Check required fields
        if (
            !customerName ||
            !email ||
            !phone ||
            !roomNumber ||
            !roomType ||
            !checkIn ||
            !checkOut
        ) {
            return res.status(400).send("All fields are required");
        }

        // Create booking
        const newBooking = await Booking.create({
            customerName: customerName,
            email: email,
            phone: phone,
            roomNumber: roomNumber,
            roomType: roomType,
            checkIn: checkIn,
            checkOut: checkOut
        });

        return res.status(201).send({
            message: "Room Booked Successfully",
            data: newBooking
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Get All Bookings
async function getAllBookings(req, res) {
    try {

        const bookings = await Booking.find();

        return res.status(200).send({
            message: "All Bookings",
            data: bookings
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createBooking,
    getAllBookings
};