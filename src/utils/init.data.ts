import fs from 'fs';
import {Skill, SkillModel} from '../models/skill.model';
import {connectMongoose} from '../config/dbconnect';
import {Experience, ExperienceModel} from "../models/experience.model";

connectMongoose();

const skills: SkillModel[] = JSON.parse(fs.readFileSync(`${__dirname}/preset-skills.json`, 'utf-8'));

const skillExpMap: Map<string, string[]> = new Map();
skillExpMap.set('Bulls Financial', ['java', 'javascript', 'python']);
skillExpMap.set('Trout Tech', ['javascript', 'python']);
skillExpMap.set('Lion Bank', ['java', 'sql']);

export const initSkills = async () => {
    try {
        // @ts-ignore
        await Skill.deleteMany();
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

const exps: ExperienceModel[] = JSON.parse(fs.readFileSync(`${__dirname}/preset-experience.json`, 'utf-8'));

export const initExps = async () => {
    try {
        // @ts-ignore
        await Experience.deleteMany();
        for (let exp of exps) {
            const filter = {companyName: exp.companyName};
            const update = {role: exp.role, years: exp.years};
            const options = {new: true, upsert: true, runValidators: true};
            await Experience.findOneAndUpdate(
                filter, update, options
            )
        }
    } catch (e) {
        console.log(e);
    }
};

export const bindSkillExp = async () => {
    const skills = await Skill.find();
    const exps = await Experience.find();
    for (let exp of exps) {
        for (let skill of skills) {
            // @ts-ignore
            if (skillExpMap.get(exp.companyName).includes(skill.skillName)) {
                await Experience.findOneAndUpdate(
                    // @ts-ignore
                    {companyName: exp.companyName},
                    {$addToSet: {skills: skill._id}}
                )
            }
        }
    }
};
