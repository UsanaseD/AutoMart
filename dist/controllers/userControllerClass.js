"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _jsonwebtoken = require("jsonwebtoken");

var _config = _interopRequireDefault(require("../config/config"));

var _model = require("../model/model");

var _schema = require("../helpers/schema");

var _helperFunc = _interopRequireDefault(require("../helpers/helperFunc"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var userController =
/*#__PURE__*/
function () {
  function userController() {
    _classCallCheck(this, userController);
  }

  _createClass(userController, [{
    key: "loginPost",
    // function to create login feature
    value: function loginPost(req, res) {
      _joi["default"].validate(req.body, _schema.loginschema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        var foundUser = _model.users.find(function (user) {
          return user.email === value.email;
        });

        if (!foundUser) return res.status(405).send('email not exists');

        _bcrypt["default"].compare(value.password, foundUser.password, function (err, result) {
          if (!result) return res.send('password doesnt match');
          (0, _jsonwebtoken.sign)({
            email: foundUser.email,
            password: foundUser.password
          }, _config["default"].SECRETKEY, function (err, data) {
            foundUser.token = data;
            res.status(200).send(foundUser);
          });
        });
      });
    } // function to create signup feature

  }, {
    key: "signupPost",
    value: function signupPost(req, res) {
      _joi["default"].validate(req.body, _schema.signupschema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        _bcrypt["default"].hash(value.password, 9, function (err, hashdpsswd) {
          if (err) return res.send('sorry reenter your password');

          var foundUser = _model.users.find(function (user) {
            return user.email === value.email;
          });

          if (foundUser) return res.status('409').send('email already exists');
          var Newuser = {
            id: _model.users.length + 1,
            firstname: value.firstname,
            lastname: value.lastname,
            address: value.address,
            admin: value.admin,
            email: value.email,
            password: hashdpsswd
          };

          _model.users.push(Newuser);

          (0, _jsonwebtoken.sign)({
            email: Newuser.email,
            password: Newuser.password,
            admin: Newuser.admin
          }, _config["default"].SECRETKEY, function (err, data) {
            Newuser.token = data;
            res.status(200).send((0, _helperFunc["default"])(Newuser));
          });
        });
      });
    }
  }]);

  return userController;
}();

var _default = new userController();

exports["default"] = _default;