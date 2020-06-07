import express from 'express';
import morgan from 'morgan';
import {chatbotRouter} from './routers/chatbot.routers';
import {skillRouter} from './routers/skill.routers';
import {initSkills} from './utils/init.skills.data';
import cors from 'cors';
import bodyParser from 'body-parser';


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

