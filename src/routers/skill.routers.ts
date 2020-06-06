import {Router} from "express";

const {addSkill, findSkillByName, updateSkill, getAllSkills} = require('../controllers/skill.controller');

const skillRouter = Router();

skillRouter.route('/add')
    .post(addSkill);

skillRouter.route('/find/:name')
    .get(findSkillByName);

skillRouter.route('/update')
    .patch(updateSkill);

skillRouter.route('/getall')
    .get(getAllSkills);

module.exports = {skillRouter};
