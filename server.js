const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const {app} = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASS);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log('db connected')
});

const packageSchema = new mongoose.Schema({
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

const Package = mongoose.model('Package', packageSchema);

const pkg = new Package({
    name: 'Basic',
    rating: 4.7,
    price: 980,
    summary: 'a basic package'
});

pkg.save().then((doc) => {
    console.log(doc)
}).catch((err) => {
    console.log(err)
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app running on : http://localhost:${port}`)
});

