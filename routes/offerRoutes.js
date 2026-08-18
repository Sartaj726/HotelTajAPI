const express = require("express");
const router = express.Router();

const offerController = require("../controllers/offerController");


// Get All Offers
router.get("/", offerController.getAllOffers);


// Get Offer By ID
router.get("/:id", offerController.getOfferById);


// Create Offer
router.post("/", offerController.createOffer);


// Update Offer
router.put("/:id", offerController.updateOffer);


// Delete Offer
router.delete("/:id", offerController.deleteOffer);


module.exports = router;