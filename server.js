const {app} = require('./src/app');
const {connectMongoose} = require('./src/config/dbconnect');

connectMongoose();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app running on : http://localhost:${port}`)
});

