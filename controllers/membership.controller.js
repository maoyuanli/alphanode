const {Membership} = require('../models/membership.model');


const applyMembership = async (req, res) => {
    try {
        const membershipApplication = await Membership.create(req.body);

        res.status(201).json({
            status: 'application received',
            data: {
                membership: membershipApplication
            }
        })
    } catch (err) {
        res.status(400).json(
            {
                status: 'application failed',
                message: err
            }
        )
    }
};


module.exports = {applyMembership};
