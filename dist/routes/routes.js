"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _carControllerClass = _interopRequireDefault(require("../controllers/carControllerClass"));

var _userControllerClass = _interopRequireDefault(require("../controllers/userControllerClass"));

var _midleware = _interopRequireDefault(require("../midleware/midleware"));

var _adminmware = _interopRequireDefault(require("../midleware/adminmware"));

var _swagger = _interopRequireDefault(require("../../swagger.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(app) {
  app.post('/api/v1/auth/signup', _userControllerClass["default"].signupPost);
  app.post('/api/v1/auth/login', _userControllerClass["default"].loginPost);
  app.post('/api/v1/car', _midleware["default"], _carControllerClass["default"].carPost);
  app.post('/api/v1/order', _midleware["default"], _carControllerClass["default"].orderPost);
  app.post('/api/v1/flag', _midleware["default"], _carControllerClass["default"].flagPost);
  app.patch('/api/v1/order/:id', _midleware["default"], _carControllerClass["default"].orderPatchStatus);
  app.patch('/api/v1/car/status/:id', _midleware["default"], _midleware["default"], _carControllerClass["default"].carPatchStatus);
  app.patch('/api/v1/car/price/:id', _midleware["default"], _carControllerClass["default"].carPatchPrice); // route to select a car by status

  app.get('/api/v1/car/status', _midleware["default"], _carControllerClass["default"].carsStatus); // route to select a car by status and price range

  app.get('/api/v1/car/range/', _midleware["default"], _carControllerClass["default"].CarsStatusPriceRange); // route to select all cars

  app.get('/api/v1/car', _adminmware["default"], _carControllerClass["default"].getAllCars); // route to select cars by state and status

  app.get('/api/v1/car/state/status', _midleware["default"], _carControllerClass["default"].getCarStatusState); // route to select all orders

  app.get('/api/v1/order', _adminmware["default"], _carControllerClass["default"].getAllOrders); // route to select car by id

  app.get('/api/v1/car/:id', _midleware["default"], _carControllerClass["default"].specifedCar);
  app["delete"]('/api/v1/car/:id', _adminmware["default"], _carControllerClass["default"].deleteCar);
  app.use('/', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
};

exports["default"] = _default;