"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = require("dotenv");

var _routes = _interopRequireDefault(require("./routes/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json()); // reads json data and sends them to (app)

(0, _routes["default"])(app);
var port = process.env.PORT;
app.listen(port, function () {
  return console.log("listening on port ".concat(port, "..."));
});
var _default = app;
exports["default"] = _default;