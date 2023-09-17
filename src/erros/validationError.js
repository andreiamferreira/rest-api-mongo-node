import badRequest from "./badRequest.js";

class ValidationError extends badRequest {
	constructor(erro){
		const mensagensErro = Object.values(erro.errors)
			.map(erro => erro.message)
			.join("; ");
		super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
	}
}

export default ValidationError;