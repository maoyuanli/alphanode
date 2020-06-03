const {Skill} = require('../models/skill-model');

const addSkill = async (req, res) => {
    try {
        const skillAdded = await Skill.create(req.body);
        res.status(201).json({
            status: 'skill added',
            data: {
                skill: skillAdded
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'operation failed',
            message: err
        })
    }
};

const findSkillByName = async (req, res) => {
    try {
        const targetName = req.params.name;
        const skill = await Skill.find({
            skillName: targetName
        });
        res.status(200).json({
            status: 'success',
            data: {
                skill: skill
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'not found',
            message: err
        })
    }
};

const updateSkill = async (req, res) => {
    try {
        const filter = {skillName: req.body.skillName};
        const update = {score: req.body.score};
        const options = {new: true, upsert: true, runValidators: true};
        const skillUpdated = await Skill.findOneAndUpdate(
            filter, update, options
        )
        res.status(200).json({
            status: 'success',
            data: {
                skill: skillUpdated
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'operation failed',
            message: err
        })
    }
};

module.exports = {addSkill, findSkillByName, updateSkill};
