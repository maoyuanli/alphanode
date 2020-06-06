const mongoose = require('mongoose');

export const skillSchema = new mongoose.Schema({
    skillName: {type: String, required: true, unique: true},
    score: {type: String, required: true}
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = {Skill};
