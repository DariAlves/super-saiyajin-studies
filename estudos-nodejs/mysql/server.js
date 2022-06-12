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

//! Listar todos usuários
app.get('/', (request, response) => {
  myPool.getConnection((err, connection) => {
    if (err) throw err;

    console.log(`Estamos conectados! 😎`);

    connection.query('SELECT * FROM user', (err, users) => {
      connection.release(); // Devolve a minha conexão para a pool.

      if (err) throw err;

      return response.render('index', { users });
    });
  });
});

//! Listar usuário específico
app.get('/:id', (request, response) => {
  myPool.getConnection((err, connection) => {
    if (err) throw err;

    console.log(`Estamos conectados! 😎`);

    const { id } = request.params;

    connection.query('SELECT * FROM user WHERE id = ?', id, (err, user) => {
      connection.release(); // Devolve a minha conexão para a pool.

      if (err) throw err;

      console.log(typeof user[0]);

      return response.render('usuario', { user: user[0] });
    });
  });
});

//! Criar novo usuário
app.post('/users/:id', (request, response) => {
  myPool.getConnection((err, connection) => {
    if (err) throw err;

    console.log(`Estamos conectados! 😎`);

    const body = request.body;

    connection.query('INSERT INTO user SET ?', body, (err, users) => {
      connection.release(); // Devolve a minha conexão para a pool.

      if (err) throw err;

      return response.status(201).json({ m: 'radical' });
    });
  });
});

//! Atualizar um novo usuário
app.put('/users/:id', (request, response) => {
  myPool.getConnection((err, connection) => {
    if (err) throw err;

    console.log(`Estamos conectados! 😎`);

    const body = request.body;
    const { id } = request.params;

    connection.query(
      'UPDATE user SET ? WHERE id = ?',
      [body, id],
      (err, user) => {
        connection.release(); // Devolve a minha conexão para a pool.

        if (err) throw err;

        console.log(typeof user[0]);

        return response.status(201).json(body);
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port} 😎`);
});

// INSERT INTO `teste`.`user` (`nome`, `idade`) VALUES ('Dog', '2');
