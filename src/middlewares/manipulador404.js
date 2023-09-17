import notFound from "../erros/notFound.js";

function manipulador404(req, res, next){
	const erro404 = new notFound();
	next(erro404);
}
export default manipulador404;