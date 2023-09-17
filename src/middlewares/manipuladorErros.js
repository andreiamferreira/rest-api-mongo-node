/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import baseErrors from "../erros/baseErrors.js";
import badRequest from "../erros/badRequest.js";
import ValidationError from "../erros/validationError.js";
import notFound from "../erros/notFound.js";

function manipuladorDeErros(erro, req, res, next) {
	if(erro instanceof mongoose.Error.CastError){
		new badRequest().enviarResposta(res);
	}else if (erro instanceof mongoose.Error.ValidationError){
		new ValidationError(erro).enviarResposta(res);
	}else if(erro instanceof notFound){
		erro.enviarResposta(res);
	}
	else{
		new baseErrors().enviarResposta(res);
	}
}



export default manipuladorDeErros;