import {Config} from "./keys";

export const prodConfig: Config = {
    mongoDBConnStr: process.env.DATABASE,
    mongoDBPassword: process.env.DB_PASS,
    gootleProjectID: process.env.GOOGLE_PROJECT_ID,
    dialogFlowSessionID: process.env.DIALOGFLOW_SESSION_ID,
    dialogFlowSessionLanguageCode: 'en-US',
    googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL,
    googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY
};
