const express = require('express');
const app = express();
const { config } = require('./config');
const moviesApi = require('./routes/movies');
const {
  logErrors,
  errorHandler
} = require('./utils/middlewares/errorHandlers');

app.use(express.json());

moviesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${config.port}`);
});
