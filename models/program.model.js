const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    programName: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true}
});

const Program = mongoose.model('Program', programSchema);


module.exports = {Program};
