"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes/routes"));

var _config = _interopRequireDefault(require("./config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json()); // reads json data and sends them to (app)

app.use(function (err, req, res) {
  return res.status(404).send({
    status: 404,
    message: 'invalid url'
  });
});
(0, _routes["default"])(app);
var port = process.env.PORT || _config["default"].PORT;
app.listen(port, function () {
  return console.log("listening on port ".concat(port, "..."));
});
var _default = app;
exports["default"] = _default;