import { autor } from "../models/Autor.js";

import livro from "../models/Livro.js";



class LivroController {

	static listarLivros = async (req, res, next) => {
		try {
			const livros = await livro.find({});

			res.status(200).json(livros);
		} catch (error) {
			next(error);
		}
	};


	static buscarLivroPorId = async (req, res, next) => {
		try {
			const id = req.params.id;
			const livroEncontrado = await livro.findById(id);

			res.status(200).json(livroEncontrado);
		} catch (error) {
			next(error);
		}
	};


	static cadastrarLivro = async (req, res, next) => {
		const novoLivro = req.body;

		try {
			// const novoLivro = await livro.create(req.body);

			const autorEncontrado = await autor.findById(novoLivro.autor);
			const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
			const livroCriado = await livro.create(livroCompleto); 

			res.status(200).json({
				message: "Criado com sucesso",
				livro: livroCriado
			});

		} catch (error) {
			next(error);
		}
	};


	static atualizarLivroPorId = async (req, res, next) => {
		try {
			const id = req.params.id;

			await livro.findByIdAndUpdate(id, req.body);
			res.status(200).json({
				message: "Livro atualizado"
			});
		} catch (error) {
			next(error);
		}
	};


	static deletarLivroPorId = async (req, res, next) => {
		try {
			const id = req.params.id;

			await livro.findByIdAndDelete(id);
			res.status(200).json({
				message: "Livro deletado!"
			});
		} catch (error) {
			next(error);
		}
	};


	static listarLivrosPorEditora = async (req, res, next) => {
		const editora = req.query.editora;

		try {
			const livrosPorEditora = await livro.find({
				//propriedade: variavel
				editora: editora
			});
			res.status(200).json(livrosPorEditora);
		} catch (error) {
			next(error);
		}
	};
}

export default LivroController;

