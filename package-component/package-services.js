const fs = require('fs');
const path = require('path');

const fileLoc = path.join(__dirname, '..', 'dev-data', 'data', 'tours-simple.json');
const tours = JSON.parse(fs.readFileSync(fileLoc));

const getAllPackages = (req, res) => {
    res.status(200).json(tours)
};

const findPackageById = (req, res) => {
    let id = Number(req.params.id);
    let filtered = tours.filter(t => t.id === id);
    res.status(200).json(filtered);
};

const postSomething = (req, res) => {
    res.status(201).json({status: 'post received', postContent: req.body})
};

const checkID = (req, res, next, val) => {
    if (Number(req.params.id) > tours.length) {
        return res.status(404).json(
            {
                message: 'Invalid ID'
            }
        )
    }
    next();
};

const checkPostBody = (req, res, next) => {
    if (typeof req.body.id === 'undefined' || typeof req.body.name === 'undefined') {
        return res.status(400).json(
            {message: 'missing id or name'}
        )
    }
    next();
};

module.exports = {getAllPackages, findPackageById, postSomething, checkID, checkPostBody};
