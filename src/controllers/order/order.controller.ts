import {Order} from '../../models/order.model';
import {Request, Response} from "express";

export const setOrder = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const order = await Order.create({
            ticker: req.body.order.ticker,
            orderType: req.body.order.order_type,
            orderPrice: req.body.order.order_price,
            orderVolumn: req.body.order.order_volumn,
            // @ts-ignore
            user: req.user._id
        });
        res.status(200).json({
            status:'success',
            order: order
        })
    } catch (err) {
        res.status(400).json({
            status: 'operation failed',
            message: err
        })
    }
};


export const getOrder = async (req: Request, res: Response) => {

};
