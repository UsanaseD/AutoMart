const joi = require('@hapi/joi');

const statusSchema = joi.object().keys({
  status: joi.string(),
});

const carschema = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }),
  manufacturer: joi.string(),
  model: joi.string(),
  price: joi.number().integer(),
  state: joi.string(),
  status: joi.string(),
});
const orderschema = joi.object().keys({
  car_id: joi.number().integer(),
  status: joi.string(),
  old_price_offered: joi.number().integer(),
  new_price_offered: joi.number().integer(),
});
const flagschema = joi.object().keys({
  car_id: joi.number().integer(),
  reason: joi.string(),
  description: joi.string(),
});
const loginschema = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }),
  password: joi.string(),
});
const signupschema = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }),
  firstname: joi.string(),
  lastname: joi.string(),
});
const priceschema = joi.object().keys({
  price: joi.number().integer(),
});
const orderpatchschema = joi.object().keys({
  new_price_offered: joi.number(),
});
exports.orderpatchschema = orderpatchschema;
exports.priceschema = priceschema;
exports.signupschema = signupschema;
exports.loginschema = loginschema;
exports.flagschema = flagschema;
exports.orderschema = orderschema;
exports.carschema = carschema;
exports.statusSchema = statusSchema;
