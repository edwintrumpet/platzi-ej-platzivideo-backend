const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { config } = require('./config');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');
const authApi = require('./routes/auth');
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: config.cors,
    credentials: true
  })
);
app.use(express.json());

moviesApi(app);
userMoviesApi(app);
authApi(app);

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
