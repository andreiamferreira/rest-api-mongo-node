import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";


class LivroController {

	static listarLivros = async (req, res, next) => {
		try {
			const buscaLivros = livro.find({});

			req.resultado = buscaLivros;

			next();
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

	static buscarLivroPorDados = async (req, res, next) => {

		try {
			const busca = await processaBusca(req.query);

			if (busca !== null) {
				const livrosResultado = await livro
					.find(busca);

				res.status(200).send(livrosResultado);
			} else {
				res.status(200).send([]);
			}
		} catch (erro) {
			next(erro);
		}
	};
}
async function processaBusca(parametros) {
	const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

	let busca = {};

	if (editora) busca.editora = editora;
	if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

	if (minPaginas || maxPaginas) busca.numeroPaginas = {};

	// gte = Greater Than or Equal = Maior ou igual que
	if (minPaginas) busca.numeroPaginas.$gte = minPaginas;
	// lte = Less Than or Equal = Menor ou igual que
	if (maxPaginas) busca.numeroPaginas.$lte = maxPaginas;

	if (nomeAutor) {
		const autorNome = await autor.findOne({ nome: nomeAutor });
		if (autorNome !== null) {
			busca.autor = autor._id;
		} else {
			busca = null;
		}
	}

	return busca;

}

export default LivroController;

