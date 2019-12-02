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

// OAuth Strategy
require("./utils/auth/strategies/oauth");

// Google Strategy
require("./utils/auth/strategies/google");

app.post("/auth/sign-in", async (req, res, next) => {
  passport.authenticate("basic", (err, data) => {
    const { token, user } = data;
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
        res.status(200).json({ user });
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

app.post("/user-movies", async (req, res, next) => {
  const { body: userMovie } = req;
  const { token } = req.cookies;
  try {
    const { data, status } = await axios({
      url: `${config.apiUrl}/api/user-movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      data: userMovie
    });
    if (status !== 201) {
      return next(Boom.badImplementation());
    }
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
});

app.delete("/user-movies/:userMovieId", async (req, res, next) => {
  const { userMovieId } = req.params;
  const { token } = req.cookies;
  try {
    const { data, status } = await axios({
      url: `${config.apiUrl}/api/user-movies/${userMovieId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: "delete"
    });
    if (status !== 200) {
      return next(Boom.badImplementation());
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

app.get(
  "/auth/google-oauth",
  passport.authenticate("google-oauth", {
    scope: ["email", "profile", "openid"]
  })
);

app.get(
  "/auth/google-oauth/callback",
  passport.authenticate("google-oauth", { session: false }),
  (req, res, next) => {
    if (!req.user) {
      next(Boom.unauthorized());
    }
    const { token, ...user } = req.user;
    res.cookie("token", token, {
      httpOnly: !config.dev,
      secure: !config.dev
    });
    res.status(200).json(user);
  }
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile", "openid"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res, next) => {
    if (!req.user) {
      next(Boom.unauthorized());
    }
    const { token, ...user } = req.user;
    res.cookie("token", token, {
      httpOnly: !config.dev,
      secure: !config.dev
    });
    res.status(200).json(user);
  }
);

app.listen(PORT, err => {
  if (err) console.log(err);
  else console.log(`Server listening on http://localhost:${PORT}`);
});
