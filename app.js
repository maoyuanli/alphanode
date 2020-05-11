const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const packageRouter = require('./package-component/package-routers');
const memberRouter = require('./member-component/member-routers');

const app = express();
app.use(express.json());
if(process.env.NODE_ENV === 'development'){app.use(morgan('dev'))}

app.use('/api/packages', packageRouter.packageRouter);
app.use('/api/members', memberRouter.memberRouter);


module.exports= {app};
