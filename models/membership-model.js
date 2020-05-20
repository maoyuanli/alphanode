const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    program: {type: String, required: true},
});

const Membership = mongoose.model('Membership', membershipSchema);

module.exports = {Membership};
