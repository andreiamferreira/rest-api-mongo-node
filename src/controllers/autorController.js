import livro from "../models/Livro.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const autores = await livro.find({});
            res.status(200).json(autores);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao buscar autores`
            })
        }
    };

    static async buscarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao busca autor`
            });
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(200).json({
                message: 'Criado com sucesso',
                autor: novoAutor
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao cadastrar autor'`
            })
        }
    };

    static async atualizarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: 'Autor atualizado'
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao busca autor`
            })
        }
        
    };

    static async deletarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Autor deletado!'
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao excluir autor`
            })
        }
        
    };
};

export default AutorController;
