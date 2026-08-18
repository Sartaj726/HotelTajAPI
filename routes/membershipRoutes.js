const express = require("express");
const router = express.Router();

const membershipController = require("../controllers/membershipController");


// Get All Memberships
router.get("/", membershipController.getAllMemberships);


// Create Membership
router.post("/", membershipController.createMembership);


module.exports = router;