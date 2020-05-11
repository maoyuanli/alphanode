const express = require('express');
const {getAllPackages, findPackageById, postSomething, checkID, checkPostBody} = require('./package-services');


const packageRouter = express.Router();
packageRouter.param('id', checkID);
packageRouter.route('/')
    .get(getAllPackages)
    .post(checkPostBody, postSomething);
packageRouter.route('/:id')
    .get(findPackageById);

module.exports = {packageRouter};
