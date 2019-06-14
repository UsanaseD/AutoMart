import joi from '@hapi/joi';

export const statusSchema = joi.object().keys({
  status: joi.string(),
});

export const carschema = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }),
  manufacturer: joi.string(),
  model: joi.string(),
  price: joi.number().integer(),
  state: joi.string().regex(/^['new','used']{3,4}$/),
});
export const orderschema = joi.object().keys({
  car_id: joi.number().integer(),
  old_price_offered: joi.number().integer(),
  new_price_offered: joi.number().integer(),
});
export const flagschema = joi.object().keys({
  car_id: joi.number().integer(),
  reason: joi.string(),
  description: joi.string(),
});
export const loginschema = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
});
export const signupschema = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  firstname: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  lastname: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  address: joi.string().alphanum().min(5).max(20)
    .required(),
  admin: joi.boolean(),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
});
export const priceschema = joi.object().keys({
  price: joi.number().integer(),
});
export const orderpatchschema = joi.object().keys({
  new_price_offered: joi.number(),
});
