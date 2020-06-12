import {Router} from "express";
import {setOrder, getOrder} from "../controllers/order/order.controller";
import {auth} from "../utils/auth";

export const setOrderRouter = Router();

setOrderRouter.route('/').post(auth, setOrder);

export const getOrderRouter = Router();

getOrderRouter.route('/').get(auth, getOrder);
