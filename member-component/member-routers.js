const express = require('express');
const {getAllMembers, findMemberByName} = require('./member-services');


const memberRouter = express.Router();
memberRouter.route('/').get(getAllMembers);
memberRouter.route('/:name').get(findMemberByName);

module.exports = {memberRouter};
