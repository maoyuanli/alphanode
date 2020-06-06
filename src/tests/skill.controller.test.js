const {updateSkill, getAllSkills} = require('../../dist/controllers/skill.controller');
const {Skill} = require('../../dist/models/skill.model');
const httpMocks = require('node-mocks-http');
const {app} = require('../../dist/app');
const request = require('supertest');

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

describe('skillController.getAllSkills', () => {
    jest.setTimeout(30000); // 30 seconds
    it('should return init skills', async () => {
        const response = await request(app).get('/api/skill/getall');
        expect(response.statusCode).toBe(200);
        expect(response.body.data.skills.length).toBeGreaterThan(6);
        const skillNames = response.body.data.skills.map(skill => skill.skillName);
        expect(skillNames).toContain('java');
        expect(skillNames).toContain('javascript');
        expect(skillNames).toContain('python')
    })
});
