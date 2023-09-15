import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const livros = await livro.find({});
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao buscar livros`
            })
        }
    };

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
    };

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(200).json({
                message: 'Criado com sucesso',
                livro: novoLivro
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao cadastrar livro`
            })
        }
    };

    static async atualizarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: 'Livro atualizado'
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao busca livro`
            })
        }
        
    };

    static async deletarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Livro deletado!'
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao excluir livro`
            })
        }
        
    };
};

export default LivroController;
