import { Router } from "express";
import userRouter from "./User";
import noteRouter from "./Note";

const router = Router();

router.use('/users', userRouter);
router.use('/notes', noteRouter);

export default router;