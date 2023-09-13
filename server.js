import http from "http";

const PORT =3001;

const routes = {
    "/": "Estudo em Node.JS",
    "/livros": "Rota livros",
    "/autores": "Rota autores"
}

const server = http.createServer((req, res) => {
    // head da requisição
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(routes[req.url]);
})


server.listen(PORT, () => {
    console.log("servidor escutando")
})