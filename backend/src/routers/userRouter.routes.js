
import { Router } from 'express';
import userController from '../controllers/userController.js';

const userRouter = Router();

//logear usuario
userRouter.post('/api/singin', userController.loginUser);

//registrar usuario
userRouter.post('/api/singup', userController.registerUser);

//listar usuarios


//listar un solo usario


//eliminar un usuario


//actualizar un usuario

export default userRouter;

