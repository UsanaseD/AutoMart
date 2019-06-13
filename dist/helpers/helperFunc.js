"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(NewUser) {
  var user = {
    firstname: NewUser.firstname,
    lastname: NewUser.lastname,
    email: NewUser.email,
    address: NewUser.address,
    token: NewUser.token
  };
  return user;
};

exports["default"] = _default;