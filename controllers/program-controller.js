const {Program} = require('../models/program-model');

const getAllPrograms = async (req, res) => {
    try {
        const progs = await Program.find();
        res.status(200).json({
            status: 'success',
            data: {
                programs: progs
            }
        })
    } catch (e) {
        res.status(400).json({
            status: 'not found',
            message: e
        })
    }
};

const createProgram = async (req, res) => {
    try {
        const progCreated = await Program.create(req.body);
        res.status(201).json({
            status: 'program created',
            data: {
                program: progCreated
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'creation failed',
            message: err
        })
    }
};


module.exports = {createProgram, getAllPrograms};
