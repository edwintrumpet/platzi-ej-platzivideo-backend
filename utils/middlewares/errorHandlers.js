const { config } = require('../../config');
const debug = require('debug')('app:error');

const withErrorStack = (error, stack) => {
  if (config.dev) {
    return { error, stack };
  }
  return error;
};

const logErrors = (err, req, res, next) => {
  debug(err);
  next(err);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json(withErrorStack(err.message, err.stack));
};

module.exports = {
  logErrors,
  errorHandler
};
