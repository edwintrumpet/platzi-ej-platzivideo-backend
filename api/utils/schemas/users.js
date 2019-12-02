const Joi = require('@hapi/joi');

const userIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const userNameSchema = Joi.string().max(100);
const userEmailSchema = Joi.string().email();
const userPasswordSchema = Joi.string();
const userIsAdminSchema = Joi.boolean();

const userSchema = {
  name: userNameSchema.required(),
  email: userEmailSchema.required(),
  password: userPasswordSchema.required()
};

const createUserSchema = {
  ...userSchema,
  isAdmin: userIsAdminSchema
};

const createProviderUserSchema = {
  ...userSchema,
  apiKeyToken: Joi.string().required()
};

module.exports = {
  userIdSchema,
  createUserSchema,
  createProviderUserSchema
};
