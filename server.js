const mongoose = require('mongoose');
const {app} = require('./src/app');
const {DB} = require('./src/config/dbconnect');

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log('db connected')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app running on : http://localhost:${port}`)
});

