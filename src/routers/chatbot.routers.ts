import express from 'express';
import {handleTextQuery} from "../controllers/chatbot.controller";


export const chatbotRouter = express.Router();

chatbotRouter.route('/')
    .post(handleTextQuery);

