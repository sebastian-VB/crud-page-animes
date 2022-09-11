
import express from 'express';
import cors from 'cors';
import userRouter from './routers/userRouter.js';

const app = express();

app.set('PORT', 4000);

app.use(express.json());

app.use('/', userRouter);

export default app;