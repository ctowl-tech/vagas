import joi from '@hapi/joi';

export const createUser = joi.object({
  email: joi.string().email().required(),
  fullName: joi.string().regex(/\w+ (\w+ *)+/).required(),
});

export const update = joi.object({
  email: joi.string().email(),
  fullName: joi.string().regex(/\w+ (\w+ *)+/),
});
