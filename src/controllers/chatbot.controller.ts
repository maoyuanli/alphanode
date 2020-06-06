const config = require('../config/keys');
const dialogflow = require('dialogflow');

const projectID = config.gootleProjectID;
const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
};
const sessionClient = new dialogflow.SessionsClient({projectID, credentials});
const sessionPath = sessionClient.sessionPath(config.gootleProjectID, config.dialogFlowSessionID);


export const handleTextQuery = async (req:any, res:any) => {
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

export const handleEventQuery = async (event:any, res:any) => {
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                // The query to send to the dialogflow agent
                name: event,
                // The language used by the client (en-US)
                languageCode: config.dialogFlowSessionLanguageCode,
            },
        },
    };
    const responses = await sessionClient.detectIntent(request);
    res.send(responses[0].queryResult);
};

module.exports = {handleTextQuery, handleEventQuery};
