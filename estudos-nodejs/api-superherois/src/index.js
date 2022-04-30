const express = require('express');
const { randomUUID } = require('crypto');

const app = express();
app.use(express.json());

const port = 3030;

// ! Super Heroes array
let superheroes = [];

// ! Create
app.post('/superheroes', (request, response) => {
  const { name, alias } = request.body;

  const superhero = {
    id: randomUUID(),
    name,
    alias,
  };

  superheroes.push(superhero);

  return response.status(201).json(superhero);
});

// ! Read
app.get('/superheroes', (request, response) => {
  return response.json(superheroes);
});

// ! Update
app.put('/superheroes/:id', (request, response) => {
  const { id } = request.params;
  const { name, alias } = request.body;

  const indexSuperhero = superheroes.findIndex(
    superhero => superhero.id === id
  );

  superheroes[indexSuperhero] = { id, name, alias };

  return response.json(superheroes[indexSuperhero]);
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port} 🚀`);
});
