const express = require('express');
const {createProgram} = require('../controllers/program-controller');


const programRouter = express.Router();

programRouter.route('/').post(createProgram);

module.exports = {programRouter};
