const {Program} = require('../models/program-model');

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

module.exports = {createProgram}
