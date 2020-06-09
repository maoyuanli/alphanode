import {Router} from "express";
import {getAllExps} from "../controllers/experience.controller/experience.controller";
import {auth} from "../utils/auth";

export const expRouter = Router();

expRouter.route('/getall')
    .get(auth, getAllExps);
