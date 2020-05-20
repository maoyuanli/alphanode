const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: Number,
    price: {
        type: Number,
        required: true
    },
    summary: String
});

const Membership = mongoose.model('Membership', membershipSchema);

const mbs = new Membership({
    name: 'Basic',
    rating: 4.7,
    price: 980,
    summary: 'a basic package'
});

mbs.save().then((doc) => {
    console.log(doc)
}).catch((err) => {
    console.log(err)
});

module.exports = {Membership};
