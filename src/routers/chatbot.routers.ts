const express = require('express');
const {handleTextQuery} = require("../controllers/chatbot.controller");


export const chatbotRouter = express.Router();

chatbotRouter.route('/')
    .post(handleTextQuery);

