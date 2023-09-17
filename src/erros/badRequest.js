import baseErrors from "./baseErrors.js";

class badRequest extends baseErrors{
	constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
		super(mensagem, 400);
	}
}

export default badRequest;