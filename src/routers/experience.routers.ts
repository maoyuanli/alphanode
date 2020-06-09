import {Router} from "express";
import {getAllExps} from "../controllers/experience.controller";

export const expRouter = Router();

expRouter.route('/getall')
    .get(getAllExps);
