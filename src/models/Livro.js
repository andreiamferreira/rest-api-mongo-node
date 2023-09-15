import mongoose from "mongoose";

// schema é um objeto de configuração, que define a estrutura e as propriedades de um documento
const livrosSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    // pode ser só type: String também
    titulo: { type: mongoose.Schema.Types.String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number }
}, { versionKey: false});

// no banco, o nome da coleção é livros
const livro = mongoose.model('livros', livrosSchema);

export default livro;