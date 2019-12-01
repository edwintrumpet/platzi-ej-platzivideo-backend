const Joi = require('@hapi/joi');

const userIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const userNameSchema = Joi.string().max(100);
const userEmailSchema = Joi.string().email();
const userPasswordSchema = Joi.string();
const userIsAdminSchema = Joi.boolean();

const createUserSchema = {
  name: userNameSchema.required(),
  email: userEmailSchema.required(),
  password: userPasswordSchema.required(),
  isAdmin: userIsAdminSchema
};

module.exports = {
  userIdSchema,
  createUserSchema
};
