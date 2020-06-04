const express = require('express');
const {createProgram, getAllPrograms} = require('../controllers/program.controller');


const programRouter = express.Router();

programRouter.route('/').post(createProgram).get(getAllPrograms);

module.exports = {programRouter};
