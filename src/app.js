import express from 'express';

// app é uma instancia de express
const app = express();

app.get("/", (req, res) => {
    res.status(200).send('Usando express')
})

export default app;