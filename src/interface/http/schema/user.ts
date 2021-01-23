import joi from '@hapi/joi';

export const createUser = joi.object({
  body: joi.object({
    fullName: joi.string().required(),
    email: joi.string().required(),
  }).required(),
});

export const update = joi.object({
  body: joi.object({
    fullName: joi.string(),
    email: joi.string(),
  }).required(),
  params: joi.object({
    id: joi.string().required(),
  }),
});

export const deleted = joi.object({
  params: joi.object({
    id: joi.string().required(),
  }),
});
