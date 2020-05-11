const fs = require('fs');
const path = require('path');

const fileLoc = path.join(__dirname,'..','dev-data','data','tours-simple.json');
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

module.exports = {getAllPackages, findPackageById, postSomething};
