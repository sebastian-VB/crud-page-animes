
import { Router } from 'express';
import userController from '../controllers/userController.js';

const userRouter = Router();

//logear usuario
userRouter.post('/api/singin', userController.loginUser);

//registrar usuario
userRouter.post('/api/singup', userController.registerUser);

//listar usuarios
userRouter.get('/api/allUser', userController.listUser);

//listar un solo usario
userRouter.get('/api/:id', userController.listOnlyUser);

//eliminar un usuario
userRouter.delete('/api/:id', userController.deleteUser);

//actualizar un usuario
userRouter.put('/api/:id', userController.updateUser);

export default userRouter;

