import {Experience} from "../models/experience.model";
import {Request, Response} from 'express';

export const getAllExps = async (req: Request, res: Response) => {
    try {
        const exps = await Experience.find().populate('skills');
        res.status(200).json({
            status: 'success',
            data: {
                exps
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'not found',
            message: err
        })
    }
};
