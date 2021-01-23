import joi from '@hapi/joi';

export const createBalance = joi.object({
  body: joi.object({
    balance: joi.string().required(),
  }).required(),
});

export const discountBalance = joi.object({
  body: joi.object({
    discount: joi.string().required(),
  }).required(),
  params: joi.object({
    id: joi.string().required(),
  }),
});

export const getUserBalance = joi.object({
  params: joi.object({
    id: joi.string().required(),
  }),
});
