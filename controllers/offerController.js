const Offer = require("../models/offer");


// Create Offer
async function createOffer(req, res) {
    try {

        const {
            offerName,
            discount,
            validity
        } = req.body;

        // Check required fields
        if (
            !offerName ||
            !discount ||
            !validity
        ) {
            return res.status(400).send("All fields are required");
        }

        // Create offer
        const newOffer = await Offer.create({
            offerName: offerName,
            discount: discount,
            validity: validity
        });

        return res.status(201).send({
            message: "Offer Created Successfully",
            data: newOffer
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Get All Offers
async function getAllOffers(req, res) {
    try {

        const offers = await Offer.find();

        return res.status(200).send({
            message: "All Offers",
            data: offers
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Get Offer By ID
async function getOfferById(req, res) {
    try {

        const offerId = req.params.id;

        const findOffer = await Offer.findById(offerId);

        if (!findOffer) {
            return res.status(404).send("Offer not found");
        }

        return res.status(200).send({
            message: "Offer Details",
            data: findOffer
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Update Offer
async function updateOffer(req, res) {
    try {

        const offerId = req.params.id;

        const updatedOffer = await Offer.findByIdAndUpdate(
            offerId,
            req.body,
            {
                new: true
            }
        );

        if (!updatedOffer) {
            return res.status(404).send("Offer not found");
        }

        return res.status(200).send({
            message: "Offer Updated Successfully",
            data: updatedOffer
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Delete Offer
async function deleteOffer(req, res) {
    try {

        const offerId = req.params.id;

        const deletedOffer = await Offer.findByIdAndDelete(offerId);

        if (!deletedOffer) {
            return res.status(404).send("Offer not found");
        }

        return res.status(200).send({
            message: "Offer Deleted Successfully",
            data: deletedOffer
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createOffer,
    getAllOffers,
    getOfferById,
    updateOffer,
    deleteOffer
};