const Membership = require("../models/membership");


// Create Membership
async function createMembership(req, res) {
    try {

        const {
            memberName,
            membershipType,
            validity,
            points
        } = req.body;

        if (
            !memberName ||
            !membershipType ||
            !validity
        ) {
            return res.status(400).send("All required fields are required");
        }

        const newMembership = await Membership.create({
            memberName: memberName,
            membershipType: membershipType,
            validity: validity,
            points: points
        });

        return res.status(201).send({
            message: "Membership Created Successfully",
            data: newMembership
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Get All Memberships
async function getAllMemberships(req, res) {
    try {

        const memberships = await Membership.find();

        return res.status(200).send({
            message: "All Memberships",
            data: memberships
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createMembership,
    getAllMemberships
};