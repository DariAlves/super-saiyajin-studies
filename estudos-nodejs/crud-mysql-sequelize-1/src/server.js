const express = require('express');
const chalk = require('chalk');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { router: userRouter } = require('./routes/userRoutes');
dotenv.config();

require('./database/database');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/users', userRouter);

app.use(
  morgan(
    chalk.red.bold('Method: :method\n') +
      chalk.blue.bold('URL: :url\n') +
      chalk.yellow.bold('Status: :status\n') +
      chalk.magenta.bold('Response: :response-time ms\n')
  )
);

app.listen(port, () => {
  console.log(
    chalk.bgWhiteBright.red.bold(
      `🔥 🔥 Server is running on http://localhost:${port} 🔥 🔥`
    )
  );
});
