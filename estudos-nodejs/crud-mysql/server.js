const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

const myPool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

//! Cadastrar novo usuário
app.post('/usuario', (request, response) => {
  myPool.getConnection((err, connection) => {
    if (err) throw err;

    console.log(`Conectado!! 😎`);

    const body = request.body;

    connection.query('INSERT INTO usuario SET ?', body, (err, usuario) => {
      connection.release(); // Devolve a minha conexão para a pool.

      if (err) throw err;

      return response.status(201).json({ message: 'Usuário cadastrado' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
