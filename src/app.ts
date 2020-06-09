import express, {Application} from 'express';
import morgan from 'morgan';
import {chatbotRouter} from './routers/chatbot.routers';
import {skillRouter} from './routers/skill.routers';
import {bindSkillExp, initExps, initSkills} from './utils/init.data';
import cors from 'cors';
import bodyParser from 'body-parser';
import {expRouter} from "./routers/experience.routers";
import {userRouter} from "./routers/user.routers";


export const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}
app.options('*', cors());
app.use('/api/chatbot', chatbotRouter);
app.use('/api/skill', skillRouter);
app.use('/api/exp', expRouter);
app.use('/api/user', userRouter);

initSkills().then(r => initExps()).then(r => bindSkillExp());


