import {provideConfig} from "../config/keys";
import dialogflow from 'dialogflow';

const projectID = provideConfig().gootleProjectID;
const credentials = {
    client_email: provideConfig().googleClientEmail,
    private_key: provideConfig().googlePrivateKey
};
const sessionClient = new dialogflow.SessionsClient({projectID, credentials});
const sessionPath = sessionClient.sessionPath(provideConfig().gootleProjectID, provideConfig().dialogFlowSessionID);


export const handleTextQuery = async (req: any, res: any) => {
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: provideConfig().dialogFlowSessionLanguageCode,
            },
        },
    };
    const responses = await sessionClient.detectIntent(request);
    res.send(responses[0].queryResult);
};

export const handleEventQuery = async (event: any, res: any) => {
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                // The query to send to the dialogflow agent
                name: event,
                // The language used by the client (en-US)
                languageCode: provideConfig().dialogFlowSessionLanguageCode,
            },
        },
    };
    const responses = await sessionClient.detectIntent(request);
    res.send(responses[0].queryResult);
};

module.exports = {handleTextQuery, handleEventQuery};
