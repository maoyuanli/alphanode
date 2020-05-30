const config = require('../utils/keys');
const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.gootleProjectID, config.dialogFlowSessionID);

const handleTextQuery = async (req, res) => {
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: config.dialogFlowSessionLanguageCode,
            },
        },
    };
    const responses = await sessionClient.detectIntent(request);
    res.send(responses[0].queryResult);
};

module.exports = {handleTextQuery};
