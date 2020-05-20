const express = require('express');
const {getAllMembership, findMembershipById, postSomething, checkID, checkPostBody} = require('../controllers/membership-controller');


const membershipRouter = express.Router();
membershipRouter.param('id', checkID);
membershipRouter.route('/')
    .get(getAllMembership)
    .post(checkPostBody, postSomething);
membershipRouter.route('/:id')
    .get(findMembershipById);

module.exports = {membershipRouter};
