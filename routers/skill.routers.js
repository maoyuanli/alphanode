const express = require('express');
const {addSkill, findSkillByName, updateSkill} = require('../controllers/skill.controller');

const skillRouter = express.Router();

skillRouter.route('/add')
    .post(addSkill);

skillRouter.route('/find/:name')
    .get(findSkillByName);

skillRouter.route('/update')
    .patch(updateSkill);


module.exports = {skillRouter};
