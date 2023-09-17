import notFound from "../erros/notFound.js";
import { autor } from "../models/Autor.js";

class AutorController {

	static listarAutores = async (req, res, next) => {
		try {
			const autores = autor.find({});
			
			req.resultado = autores;
			next();
		} catch (error) {
			next(error);
		}
	};



	static buscarAutorPorId = async (req, res, next) => {
		try {
			const id = req.params.id;
			const autorEncontrado = await autor.findById(id);

			if (autorEncontrado !== null) {
				res.status(200).json(autorEncontrado);
			}else{
				next(new notFound("ID do autor não encontrada"));
			}
		} catch (error) {
			next(error);
		}
	};


	static cadastrarAutor = async (req, res, next) => {
		try {
			const novoAutor = await autor.create(req.body);

			res.status(200).json({
				message: "Criado com sucesso",
				autor: novoAutor
			});
		} catch (error) {
			next(error);
		}
	};


	static atualizarAutorPorId = async (req, res, next) => {
		try {
			const id = req.params.id;

			await autor.findByIdAndUpdate(id, req.body);
			res.status(200).json({
				message: "Autor atualizado"
			});
		} catch (error) {
			next(error);
		}
	};


	static deletarAutorPorId = async (req, res, next) => {
		try {
			const id = req.params.id;

			await autor.findByIdAndDelete(id);
			res.status(200).json({
				message: "Autor deletado!"
			});
		} catch (error) {
			next(error);
		}
	};
}


export default AutorController;

