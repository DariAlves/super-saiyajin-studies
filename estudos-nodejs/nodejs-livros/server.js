const path = require('path'); //! Módulo nativo Node.js
const express = require('express'); //! Módulo de terceiros (NPM)
const livros = require('./data/produtos.json'); //! Módulo local
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

//! Setar nossa template engine
app.set('view engine', 'ejs');

//! Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//! Setar body parser
app.use(bodyParser.urlencoded({ extended: false }));

//! Homepage
app.get('/', (request, response) => {
  return response.render('index', { title: 'Homepage' });
});

//! Listar todos os livros
app.get('/livros', (request, response) => {
  return response.render('livros', { livros, title: 'Livros' });
});

//! Descrição de um livro
app.get('/livros/descricao/:id', (request, response) => {
  const { id } = request.params;

  return response.render('descricao', {
    livro: livros[id - 1],
    title: 'Descrição',
  });
});

//! Buscar livro
app.post('/', (request, response) => {
  const { buscar } = request.body;

  const livrosFiltrados = livros.filter(livro => livro.titulo.includes(buscar));

  if (livrosFiltrados.length === 0) {
    return response.render('buscarLivro', { livros: null, title: 'Filtro' });
  }

  return response.render('buscarLivro', {
    livros: livrosFiltrados,
    title: 'Filtro',
  });
});

app.listen(port, () => {
  console.log(`😎 Servidor rodando na porta ${port}`);
});
