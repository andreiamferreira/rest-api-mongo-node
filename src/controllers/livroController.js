import { autor } from "../models/Autor.js";

import livro from "../models/Livro.js";



class LivroController {

	static async listarLivros(req, res) {
		try {
			const livros = await livro.find({});

			res.status(200).json(livros);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha ao buscar livros`
			});
		}
	}


	static async buscarLivroPorId(req, res) {
		try {
			const id = req.params.id;
			const livroEncontrado = await livro.findById(id);

			res.status(200).json(livroEncontrado);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha ao busca livro`
			});
		}
	}


	static async cadastrarLivro(req, res) {
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
			res.status(500).json({
				message: `${error.message} - falha ao cadastrar livro`
			});
		}
	}


	static async atualizarLivroPorId(req, res) {
		try {
			const id = req.params.id;

			await livro.findByIdAndUpdate(id, req.body);
			res.status(200).json({
				message: "Livro atualizado"
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha ao busca livro`
			});
		}
	}


	static async deletarLivroPorId(req, res) {
		try {
			const id = req.params.id;

			await livro.findByIdAndDelete(id);
			res.status(200).json({
				message: "Livro deletado!"
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha ao excluir livro`
			});
		}
	}


	static async listarLivrosPorEditora (req, res){
		const editora = req.query.editora;

		try {
			const livrosPorEditora = await livro.find({
				//propriedade: variavel
				editora: editora
			});
			res.status(200).json(livrosPorEditora);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na busca`
			});
		}
	}
}

export default LivroController;

