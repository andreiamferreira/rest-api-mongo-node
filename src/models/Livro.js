import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

// schema é um objeto de configuração, que define a estrutura e as propriedades de um documento
const livrosSchema = new mongoose.Schema({
	id: { type: mongoose.Schema.Types.ObjectId },
	// pode ser só type: String também
	titulo: { 
		type: mongoose.Schema.Types.String, 
		required: [true, "O campo título é obrigatório"] 
	},
	editora: { 
		type: String,
		enum: {
			values: ["Penguin", "Editora 34"],
			message: "A editora {VALUE} não é um valor permitido"
		}
	},
	preco: { type: Number },
	paginas: { 
		type: Number,
		min: [10, "O número de páginas deve estar entre 10 e 5000"],
		max: [5000, "O número de páginas deve estar entre 10 e 5000"] 
	},
	autor: {
		type: autorSchema,
		required: [true, "O autor é obrigatório"]
	},
}, { versionKey: false});

// no banco, o nome da coleção é livros
const livro = mongoose.model("livros", livrosSchema);

export default livro;