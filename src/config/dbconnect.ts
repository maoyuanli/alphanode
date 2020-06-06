const config = require('./keys');
const DB = config.mongoDBConnStr.replace('<PASSWORD>', config.mongoDBPassword);
const mongoose = require('mongoose');

export const connectMongoose = () => {
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(con => {
        console.log('db connected')
    });
};

module.exports = {DB, connectMongoose};
