const express = require('express');

const app = express();
app.set('view engine', 'ejs');

const port = process.env.PORT || 3030;

/* Rotas */
app.get('/', (request, response) => {
  return response.render('home');
});

app.get('/adriana', (request, response) => {
  return response.render('adriana');
});

app.get('/dari', (request, response) => {
  return response.render('dari');
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port} 🚀`);
});
