const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const fs = require('fs');
const {Skill} = require('../models/skill.model');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASS);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log('db connected in skills data initialization')
});

const skills = JSON.parse(fs.readFileSync(`${__dirname}/preset-skills.json`, 'utf-8'));

const initSkills = async () => {
    try {
        Skill.deleteMany();
        for (let skill of skills) {
            const filter = {skillName: skill.skillName};
            const update = {score: skill.score};
            const options = {new: true, upsert: true, runValidators: true};
            await Skill.findOneAndUpdate(
                filter, update, options
            )
        }

    } catch (e) {
        console.log(e);
    }
};


initSkills().then(r => {
    console.log('skills initialized');
});

module.exports = {initSkills};

