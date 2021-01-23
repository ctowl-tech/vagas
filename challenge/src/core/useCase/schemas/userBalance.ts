import joi from '@hapi/joi';

export const createBalance = joi.object({
  balance: joi.string().required(),
});

export const discountBalance = joi.object({
  discount: joi.string().required(),
});
