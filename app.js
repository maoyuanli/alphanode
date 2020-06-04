const express = require('express');
const morgan = require('morgan');
const {membershipRouter} = require('./routers/membership.routers');
const {programRouter} = require('./routers/program.routers');
const {chatbotRouter} = require('./routers/chatbot.routers');
const {skillRouter} = require('./routers/skill.routers');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.options('*', cors());
app.use('/api/membership', membershipRouter);
app.use('/api/program', programRouter);
app.use('/api/chatbot', chatbotRouter);
app.use('/api/skill', skillRouter);

module.exports = {app};
