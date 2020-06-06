const {app} = require('./app');
const {connectMongoose} = require('./config/dbconnect');

connectMongoose();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app running on : http://localhost:${port}`)
});

