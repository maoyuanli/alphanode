const {handleTextQuery} = require('../../dist/controllers/chatbot.controller');
const httpMocks = require('node-mocks-http');

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
});

describe('chatbot controller handleTextQuery', () => {
    it('should return fulfillmentText', async () => {
        req.body = {
            text: 'hi'
        };
        await handleTextQuery(req, res);
        dfResponse = res._getData();
        expect(dfResponse.fulfillmentText.length).toBeGreaterThan(0);
        expect(dfResponse.allRequiredParamsPresent).toBe(true);
        expect(dfResponse.queryText).toBe('hi');
    });
});
