
import { Router } from 'express';
import animeController from '../controllers/animeController.js';

const animeRouter = Router();

//listar animes
animeRouter.get('/api/listAnimes', animeController.listAnime);

//listar un solo anime
animeRouter.get('/api/anime/:id', animeController.listOnlyAnime);

//agregar animes
animeRouter.post('/api/addAnime', animeController.addAnime);

//actualizar animes
animeRouter.put('/api/updAnime/:id', animeController.updateAnime);

//eliminar animes
animeRouter.delete('/api/delAnime/:id', animeController.deleteAnime);

export default animeRouter;
