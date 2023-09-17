import express from "express";
import LivroController from "../controllers/livroController.js";
import paginar from "../middlewares/paginacao.js";

const routes = express.Router();

// maior complexidade para a menor
routes.get("/livros", LivroController.listarLivros, paginar);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.buscarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.post("/livros/:id", LivroController.atualizarLivroPorId);
routes.delete("/livros/:id", LivroController.deletarLivroPorId);


export default routes;