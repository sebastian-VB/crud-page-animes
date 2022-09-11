
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res)=>res.json({hello: 'Hellow world'}));

export default userRouter;

