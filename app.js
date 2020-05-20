const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const membershipRouter = require('./routers/membership-routers');
const memberRouter = require('./routers/member-routers');

const app = express();
app.use(express.json());
if(process.env.NODE_ENV === 'development'){app.use(morgan('dev'))}

app.use('/api/membership', membershipRouter.membershipRouter);
app.use('/api/member', memberRouter.memberRouter);


module.exports= {app};
