const express = require("express");
const { config } = require("./config");

const app = express();
const PORT = config.port;

app.use(express.json());

app.post('/auth/sign-in', async (req, res, next) => {})

app.post('/auth/sign-up', async (req, res, next) => {})

app.get('/movies', async (req, res, next) => {})

app.post('/user-movies', async (req, res, next) => {})

app.delete('/user-movies/:userMovieId', async (req, res, next) => {})

app.listen(PORT, err => {
  if (err) console.log(err);
  else console.log(`Server listening on http://localhost:${PORT}`);
});
