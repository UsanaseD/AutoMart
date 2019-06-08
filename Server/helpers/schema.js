import joi from '@hapi/joi';

export const statusSchema = joi.object().keys({
  status: joi.string(),
});

export const carschema = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }),
  manufacturer: joi.string(),
  model: joi.string(),
  price: joi.number().integer(),
  state: joi.string(),
  status: joi.string(),
});
export const orderschema = joi.object().keys({
  car_id: joi.number().integer(),
  status: joi.string(),
  old_price_offered: joi.number().integer(),
  new_price_offered: joi.number().integer(),
});
export const flagschema = joi.object().keys({
  car_id: joi.number().integer(),
  reason: joi.string(),
  description: joi.string(),
});
export const loginschema = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }),
  password: joi.string(),
});
export const signupschema = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }),
  firstname: joi.string(),
  lastname: joi.string(),
});
export const priceschema = joi.object().keys({
  price: joi.number().integer(),
});
export const orderpatchschema = joi.object().keys({
  new_price_offered: joi.number(),
});

