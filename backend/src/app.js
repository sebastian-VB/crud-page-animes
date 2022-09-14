
import express from 'express';
import userRouter from './routers/userRouter.routes.js';
import cors from 'cors';
import animeRouter from './routers/animeRouter.routes.js';

const app = express();

app.set('PORT', 4000);

app.use(cors());
app.use(express.json());

app.use('/lr', userRouter);
app.use('/anime', animeRouter);

export default app;