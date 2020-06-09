import {User} from "../../models/user.model";
import {Request, Response} from "express";

export const userRegister = async (req:Request, res:Response) =>{
    try {
        const userRegistered = await User.create(req.body);
        res.status(200).json({
            status: 'user added',
            data:{
                user: userRegistered.get("username")
            }
        })
    }catch (err) {
        res.status(400).json({
            status: 'operation failed',
            message: err
        })
    }
};
