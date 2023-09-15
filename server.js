// import http from "http";

// dotenv tem que ser importado no ponto mais externo da aplicação, a primeira a ser rodada
import 'dotenv/config';
import app from "./src/app.js";

const PORT =3001;

// criando server do 0 com http
// const routes = {
//     "/": "Estudo em Node.JS",
//     "/livros": "Rota livros",
//     "/autores": "Rota autores"
// }

// const server = http.createServer((req, res) => {
//     // head da requisição
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(routes[req.url]);
// })


// server.listen(PORT, () => {
//     console.log("servidor escutando")
// })

app.listen(PORT, () => {
    console.log('servidor up -> epxress')
})