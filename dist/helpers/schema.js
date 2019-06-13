"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderpatchschema = exports.priceschema = exports.signupschema = exports.loginschema = exports.flagschema = exports.orderschema = exports.carschema = exports.statusSchema = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var statusSchema = _joi["default"].object().keys({
  status: _joi["default"].string()
});

exports.statusSchema = statusSchema;

var carschema = _joi["default"].object().keys({
  email: _joi["default"].string().email({
    minDomainSegments: 2
  }),
  manufacturer: _joi["default"].string(),
  model: _joi["default"].string(),
  price: _joi["default"].number().integer(),
  state: _joi["default"].string().regex(/^['new','used']{3,4}$/)
});

exports.carschema = carschema;

var orderschema = _joi["default"].object().keys({
  car_id: _joi["default"].number().integer(),
  status: _joi["default"].string(),
  old_price_offered: _joi["default"].number().integer(),
  new_price_offered: _joi["default"].number().integer()
});

exports.orderschema = orderschema;

var flagschema = _joi["default"].object().keys({
  car_id: _joi["default"].number().integer(),
  reason: _joi["default"].string(),
  description: _joi["default"].string()
});

exports.flagschema = flagschema;

var loginschema = _joi["default"].object().keys({
  email: _joi["default"].string().email({
    minDomainSegments: 2
  }).required(),
  password: _joi["default"].string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
});

exports.loginschema = loginschema;

var signupschema = _joi["default"].object().keys({
  email: _joi["default"].string().email({
    minDomainSegments: 2
  }).required(),
  firstname: _joi["default"].string(),
  lastname: _joi["default"].string(),
  address: _joi["default"].string().alphanum().min(5).max(20).required(),
  admin: _joi["default"]["boolean"](),
  password: _joi["default"].string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
});

exports.signupschema = signupschema;

var priceschema = _joi["default"].object().keys({
  price: _joi["default"].number().integer()
});

exports.priceschema = priceschema;

var orderpatchschema = _joi["default"].object().keys({
  new_price_offered: _joi["default"].number()
});

exports.orderpatchschema = orderpatchschema;