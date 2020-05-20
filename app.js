const express = require('express');
const morgan = require('morgan');
const {membershipRouter} = require('./routers/membership-routers');
const {programRouter} = require('./routers/program-routers');


const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/membership', membershipRouter);
app.use('/api/program', programRouter);

module.exports = {app};
