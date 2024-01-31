import { Request, Response } from 'express';
import express from 'express';
import Note from '../models/Note';

const noteRouter = express.Router();

noteRouter.get('/', async (req: Request, res: Response) => {
    try {
        const notes = await Note.find({});
        return res.send(notes);
    } catch (error) {
        return res.status(500);
        
    }
})

export default noteRouter;