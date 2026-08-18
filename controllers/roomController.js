const Room = require("../models/room");


// Create Room
async function createRoom(req, res) {
    try {

        const {
            roomNumber,
            roomType,
            price,
            isAvailable
        } = req.body;

        // Check required fields
        if (
            !roomNumber ||
            !roomType ||
            !price
        ) {
            return res.status(400).send("All required fields are required");
        }

        // Check if room already exists
        const findRoom = await Room.findOne({
            roomNumber: roomNumber
        });

        if (findRoom) {
            return res.status(400).send("Room already exists");
        }

        // Create Room
        const newRoom = await Room.create({
            roomNumber: roomNumber,
            roomType: roomType,
            price: price,
            isAvailable: isAvailable
        });

        return res.status(201).send({
            message: "Room Created Successfully",
            data: newRoom
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Get All Rooms
async function getAllRooms(req, res) {
    try {

        const rooms = await Room.find();

        return res.status(200).send({
            message: "All Rooms",
            data: rooms
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Get Room By ID
async function getRoomById(req, res) {
    try {

        const roomId = req.params.id;

        const findRoom = await Room.findById(roomId);

        if (!findRoom) {
            return res.status(404).send("Room not found");
        }

        return res.status(200).send({
            message: "Room Details",
            data: findRoom
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Update Room
async function updateRoom(req, res) {
    try {

        const roomId = req.params.id;

        const updatedRoom = await Room.findByIdAndUpdate(
            roomId,
            req.body,
            {
                new: true
            }
        );

        if (!updatedRoom) {
            return res.status(404).send("Room not found");
        }

        return res.status(200).send({
            message: "Room Updated Successfully",
            data: updatedRoom
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Delete Room
async function deleteRoom(req, res) {
    try {

        const roomId = req.params.id;

        const deletedRoom = await Room.findByIdAndDelete(roomId);

        if (!deletedRoom) {
            return res.status(404).send("Room not found");
        }

        return res.status(200).send({
            message: "Room Deleted Successfully",
            data: deletedRoom
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createRoom,
    getAllRooms,
    getRoomById,
    updateRoom,
    deleteRoom
};

