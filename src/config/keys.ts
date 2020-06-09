import {prodConfig} from "./prod";

export const provideConfig = (): Config => {
    if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV === 'production') {
        return prodConfig;
    } else {
        const {devConfig} = require('./dev');
        return devConfig;
    }
};

export interface Config {
    jwtPrivateToken: any
    mongoDBConnStr: any,
    mongoDBPassword: any,
    gootleProjectID: any,
    dialogFlowSessionID: any,
    dialogFlowSessionLanguageCode: any,
    googleClientEmail: any,
    googlePrivateKey: any
};
