const {app} = require('../app');
const {connectMongoose} = require('./dbconnect');

connectMongoose();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app running on : http://localhost:${port}`)
});

