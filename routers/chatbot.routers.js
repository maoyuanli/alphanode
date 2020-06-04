const express = require('express');
const {handleTextQuery} = require("../controllers/chatbot.controller");



const chatbotRouter = express.Router();

chatbotRouter.route('/')
    .post(handleTextQuery);

module.exports = {chatbotRouter};
