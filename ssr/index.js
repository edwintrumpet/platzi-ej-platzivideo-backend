const express = require("express");
const { config } = require("./config");
const passport = require("passport");
const Boom = require("@hapi/boom");
const cookieParser = require("cookie-parser");
const axios = require("axios");

const app = express();
const PORT = config.port;

app.use(express.json());
app.use(cookieParser());

// Basic Strategy
require("./utils/auth/strategies/basic");

app.post("/auth/sign-in", async (req, res, next) => {
  passport.authenticate("basic", (error, data) => {
    try {
      if (err || !data) {
        next(Boom.unauthorized());
      }
      req.login(data, { session: false }, async err => {
        if (err) {
          next(err);
        }
        res.cookie("token", token, {
          httpOnly: !config.dev,
          secure: !config.dev
        });
        res.status(200).json(user);
      });
    } catch (err) {
      next(err);
    }
  })(req, res, next);
});

app.post("/auth/sign-up", async (req, res, next) => {
  const { body: user } = req;
  try {
    await axios({
      url: `${config.apiUrl}/api/auth/sign-up`,
      method: "post",
      data: user
    });
    res.status(200).json({ message: "user created" });
  } catch (err) {
    next(err);
  }
});

app.get("/movies", async (req, res, next) => {});

app.post("/user-movies", async (req, res, next) => {});

app.delete("/user-movies/:userMovieId", async (req, res, next) => {});

app.listen(PORT, err => {
  if (err) console.log(err);
  else console.log(`Server listening on http://localhost:${PORT}`);
});
