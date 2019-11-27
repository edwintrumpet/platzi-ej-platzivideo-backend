const express = require('express');
const app = express();
const { config } = require('./config');
const moviesApi = require('./routes/movies');
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');

app.use(express.json());

moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${config.port}`);
});
