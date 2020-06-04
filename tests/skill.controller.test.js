const {updateSkill} = require('../controllers/skill.controller');
const {Skill} = require('../models/skill.model');
const httpMocks = require('node-mocks-http');

Skill.findOneAndUpdate = jest.fn();

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
});

describe('skillController.updateSkill', () => {
    beforeEach(() => {
        mockReqPayload = {
            skillName: 'python',
            score: 5
        };
        req.body = mockReqPayload;
    });

    it('should parse correct params to findOneAndUpdate function', () => {
        updateSkill(req, res);
        expect(Skill.findOneAndUpdate).toBeCalledWith(
            {skillName: mockReqPayload.skillName},
            {score: mockReqPayload.score},
            {new: true, upsert: true, runValidators: true}
        );
    });

    it("should return res status of 201", () => {
        updateSkill(req, res);
        expect(res.statusCode).toBe(200);
    });

    it("should return json response", async () => {
        const mockMongoRes = {
            "_id": "5ed7f45427b44edcdc4e4968",
            "skillName": mockReqPayload.skillName,
            "__v": 0,
            "score": mockReqPayload.score
        };
        Skill.findOneAndUpdate.mockReturnValue(mockMongoRes);
        const expectedRes = {
            "status": "success",
            "data": {
                "skill": mockMongoRes
            }
        };
        await updateSkill(req, res);
        expect(res._getJSONData()).toStrictEqual(expectedRes);
    })
});

