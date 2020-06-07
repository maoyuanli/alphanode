import {devConfig} from "./dev";
import {prodConfig} from "./prod";

export const provideConfig = (): Config => {
    if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV === 'production') {
        return prodConfig;
    } else {
        return devConfig;
    }
};

export interface Config {
    mongoDBConnStr: any,
    mongoDBPassword: any,
    gootleProjectID: any,
    dialogFlowSessionID: any,
    dialogFlowSessionLanguageCode: any,
    googleClientEmail: any,
    googlePrivateKey: any
};
