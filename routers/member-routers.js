const express = require('express');
const {getAllMembers, findMemberByName} = require('../controllers/member-controller');


const memberRouter = express.Router();
memberRouter.route('/').get(getAllMembers);
memberRouter.route('/:name').get(findMemberByName);

module.exports = {memberRouter};
