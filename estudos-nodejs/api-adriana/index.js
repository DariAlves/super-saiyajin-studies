const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;

/* Banco de dados */
const usuarios = [];

app.post('/usuarios', (request, response) => {});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
