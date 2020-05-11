const fs = require('fs');
const path = require('path');

const fileLoc = path.join(__dirname,'..','dev-data','data','users.json');
const users = JSON.parse(fs.readFileSync(fileLoc));

const getAllMembers = (req, res) => {
    res.status(200).json(users)
};

const findMemberByName = (req, res) => {
    let name = req.params.name;
    console.log(name);
    let filtered = users.filter(m => m.name.toLowerCase().includes(name.toLowerCase()));
    res.status(200).json(filtered);
};

module.exports = {getAllMembers, findMemberByName};
