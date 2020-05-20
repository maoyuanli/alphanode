const express = require('express');
const { applyMembership } = require('../controllers/membership-controller');


const membershipRouter = express.Router();

membershipRouter.route('/')
    .post(applyMembership);


module.exports = {membershipRouter};
