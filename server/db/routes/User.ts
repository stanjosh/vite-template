import { Request, Response } from 'express';
import express from 'express';
import { User } from '../models';

const userRouter = express.Router();

userRouter.post('/', async (req: Request, res: Response) => {
    try {
        const notes = await User.create({});
        return res.send(notes);
    } catch (error) {
        return res.status(500);
        
    }
})

export default userRouter;