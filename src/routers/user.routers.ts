import {Router} from "express";
import {userRegister} from "../controllers/user.controller/user.controller";

export const userRouter = Router();

userRouter.route('/register')
    .post(userRegister);
