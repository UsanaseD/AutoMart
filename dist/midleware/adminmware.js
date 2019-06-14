"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(req, res, next) {
  var token = req.headers.authorization.split(' ')[1];

  _jsonwebtoken["default"].verify(token, _config["default"].SECRETKEY, function (err, data) {
    if (err) return res.status(403).send('invalid token');
    if (!data.admin) return res.status(403).send('you are not admi');
    next();
  });
};

exports["default"] = _default;