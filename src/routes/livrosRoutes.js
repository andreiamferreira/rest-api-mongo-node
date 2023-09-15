import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);
routes.get('/livros/:id', LivroController.buscarLivroPorId);
routes.post('/livros', LivroController.cadastrarLivro);
routes.post('/livros/:id', LivroController.atualizarLivroPorId);
routes.delete('/livros/:id', LivroController.deletarLivroPorId);

export default routes;