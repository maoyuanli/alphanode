const config = require('./keys');
const DB = config.mongoDBConnStr.replace('<PASSWORD>', config.mongoDBPassword);
import mongoose from 'mongoose';

export const connectMongoose = () => {
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => {
        console.log('db connected')
    });
};
