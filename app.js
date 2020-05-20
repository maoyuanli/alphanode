const express = require('express');
const morgan = require('morgan');
const {membershipRouter} = require('./routers/membership-routers');
const {programRouter} = require('./routers/program-routers');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.options('*', cors());
app.use('/api/membership', membershipRouter);
app.use('/api/program', programRouter);

module.exports = {app};
