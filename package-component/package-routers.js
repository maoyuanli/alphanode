const express = require('express');
const {getAllPackages ,findPackageById, postSomething} = require('./package-services');


const packageRouter = express.Router();
packageRouter.route('/').get(getAllPackages).post(postSomething);
packageRouter.route('/:id').get(findPackageById);

module.exports = {packageRouter};
