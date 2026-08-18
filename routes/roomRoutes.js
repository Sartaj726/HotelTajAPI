const express = require("express");
const router = express.Router();

const roomController = require("../controllers/roomController");
const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminmiddleware");


// Get All Rooms
router.get("/", roomController.getAllRooms);


// Get Room By ID
router.get("/:id", roomController.getRoomById);


// Create Room
router.post("/", roomController.createRoom);


// Update Room - Admin Only
router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    roomController.updateRoom
);


// Delete Room - Admin Only
router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    roomController.deleteRoom
);


module.exports = router;