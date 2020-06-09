import {User} from "../../models/user.model";
import {Request, Response} from "express";
import bcrypt from "bcrypt";

export const userRegister = async (req: Request, res: Response) => {
    try {
        const username: string = req.body.username;
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        const userRegistered = await User.create({
            username, password
        });
        res.status(200).json({
            status: 'user added',
            data: {
                user: userRegistered.get("username")
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'operation failed',
            message: err
        })
    }
};
