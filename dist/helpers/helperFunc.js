"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(NewUser) {
  var user = {
    id: NewUser.id,
    firstname: NewUser.firstname,
    lastname: NewUser.lastname,
    email: NewUser.email,
    address: NewUser.address,
    token: NewUser.token,
    admin: NewUser.admin
  };
  return user;
};

exports["default"] = _default;