const express = require("express");
const router = express.Router();

const roomController = require("../controllers/roomController");
const adminMiddleware = require("../middleware/adminMiddleware");


// Get All Rooms
router.get("/", roomController.getAllRooms);


// Get Room By ID
router.get("/:id", roomController.getRoomById);


// Create Room
router.post("/", roomController.createRoom);


// Update Room - Admin Only
router.put("/:id", adminMiddleware, roomController.updateRoom);


// Delete Room - Admin Only
router.delete("/:id", adminMiddleware, roomController.deleteRoom);


module.exports = router;