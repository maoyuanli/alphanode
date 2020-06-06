import express from 'express';
const morgan = require('morgan');
const {chatbotRouter} = require('./routers/chatbot.routers');
const {skillRouter} = require('./routers/skill.routers');
const {initSkills} = require('./utils/init.skills.data');
const cors = require('cors');
const bodyParser = require('body-parser');


export const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.options('*', cors());
app.use('/api/chatbot', chatbotRouter);
app.use('/api/skill', skillRouter);

initSkills();

module.exports = {app};
