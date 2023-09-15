import express, { application } from "express";

// app é uma instancia de express
const app = express();
//middleware
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
    }
]

app.get("/", (req, res) => {
    res.status(200).send('Usando express');
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

function buscaLivros(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send('livro cadastrado com sucesso');
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros)
})

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    // pop delete o ultimo elemento da lista
    // splice deleta em qualquer posição
    // parametros: o que deletar, e quantidade (deletar livro com id index, e apenas 1)
    livros.splice(index, 1);
    res.status(200).send('Livro deletado com sucesso');
})

export default app;