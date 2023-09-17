import baseErrors from "./baseErrors.js";

class notFound extends baseErrors{
	constructor(mensagem = "Página não encontrada") {
		super(mensagem, 404);
	}
}

export default notFound;