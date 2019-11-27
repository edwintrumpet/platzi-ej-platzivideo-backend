const Boom = require('@hapi/boom');

const validate = () => {
  return false;
};

const validationHandler = (schema, check = 'body') => {
  return (req, res, next) => {
    const error = validate(req[check], schema);
    error ? next(Boom.badRequest(error)) : next();
  };
};

module.exports = validationHandler;
