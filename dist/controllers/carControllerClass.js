"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _model = require("../model/model");

var _schema = require("../helpers/schema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var carController =
/*#__PURE__*/
function () {
  function carController() {
    _classCallCheck(this, carController);
  }

  _createClass(carController, [{
    key: "getAllCars",
    // function to select all cars
    value: function getAllCars(req, res) {
      res.status(200).send(_model.cars);
    } // function to select all orders

  }, {
    key: "getAllOrders",
    value: function getAllOrders(req, res) {
      res.status(200).send(_model.orders);
    } // function to select cars by state & status

  }, {
    key: "getCarStatusState",
    value: function getCarStatusState(req, res) {
      var car = _model.cars.filter(function (car) {
        return car.status == req.query.status && car.state == req.query.state;
      });

      res.status(200).send(car);
    } // function to select cars by stateus & pricerange

  }, {
    key: "CarsStatusPriceRange",
    value: function CarsStatusPriceRange(req, res) {
      var status = req.query.status;
      var minPrice = parseInt(req.query.min_price, 10);
      var maxPrice = parseInt(req.query.max_price, 10);
      var range = [];

      _model.cars.forEach(function (car) {
        if (car.status == status && minPrice <= car.price && car.price <= maxPrice) {
          range.push(car);
        }
      });

      res.status(200).send(range);
    } // function to select cars by status

  }, {
    key: "carsStatus",
    value: function carsStatus(req, res) {
      var car = _model.cars.filter(function (car) {
        return car.status == req.query.status;
      });

      if (!car) return res.send('there is no cars with Available Status');
      res.status(200).send(car);
    } // function to select a car by id

  }, {
    key: "specifedCar",
    value: function specifedCar(req, res) {
      var car = _model.cars.find(function (car) {
        return car.id == req.params.id;
      });

      if (!car) return res.send('there is no cars with this Id');
      res.status(200).send(car);
    } // function to to delete a specified car

  }, {
    key: "deleteCar",
    value: function deleteCar(req, res) {
      _joi["default"].validate(req.body, _schema.statusSchema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        var car = _model.cars.find(function (car) {
          return car.id == parseInt(req.params.id, 10);
        });

        if (!car) return res.status(404).send('the id provided does not exist');

        var index = _model.cars.indexOf(car);

        _model.cars.splice(index, 1);

        res.send(car);
      });
    } // function to update a car's status

  }, {
    key: "carPatchStatus",
    value: function carPatchStatus(req, res) {
      _joi["default"].validate(req.body, _schema.statusSchema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        var car = _model.cars.find(function (car) {
          return car.id == parseInt(req.params.id, 10);
        });

        if (!car) return res.send('the id provided does not exist');
        car.status = value.status;
        return res.status(200).send(car);
      });
    } // function to update a car's price

  }, {
    key: "carPatchPrice",
    value: function carPatchPrice(req, res) {
      _joi["default"].validate(req.body, _schema.priceschema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        var car = _model.cars.find(function (car) {
          return car.id == parseInt(req.params.id, 10);
        });

        if (!car) return res.send('the requested Id doesnt exist');
        car.price = value.price;
        return res.send(car);
      });
    } // function to update an order's status

  }, {
    key: "orderPatchStatus",
    value: function orderPatchStatus(req, res) {
      _joi["default"].validate(req.body, _schema.orderpatchschema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        var order = _model.orders.find(function (order) {
          return order.id == parseInt(req.params.id, 10) && order.status == 'pending';
        });

        if (!order) return res.send('the stated id doesnt exist or the status is not pending');
        order.new_price_offered = value.new_price_offered;
        return res.send(order);
      });
    } // function to create a car

  }, {
    key: "carPost",
    value: function carPost(req, res) {
      _joi["default"].validate(req.body, _schema.carschema, function (err, value) {
        if (err) return res.send(err.details[0].message);
        var ride = {
          id: _model.cars.length + 1,
          email: value.email,
          date: new Date(),
          manufacturer: value.manufacturer,
          model: value.model,
          price: value.price,
          state: value.state,
          status: 'Available'
        };

        _model.cars.push(ride);

        res.status(200).send(ride);
      });
    } // function to create an order

  }, {
    key: "orderPost",
    value: function orderPost(req, res) {
      _joi["default"].validate(req.body, _schema.orderschema, function (err, value) {
        if (err) return res.send(err.details[0].message);
        var ordr = {
          id: _model.orders.length + 1,
          car_id: value.car_id,
          createdOn: new Date(),
          status: value.status,
          old_price_offered: value.old_price_offered,
          new_price_offered: value.new_price_offered
        };

        _model.orders.push(ordr);

        res.status(200).send(ordr);
      });
    } // function to create a flag

  }, {
    key: "flagPost",
    value: function flagPost(req, res) {
      _joi["default"].validate(req.body, _schema.flagschema, function (err, value) {
        if (err) return res.send(err.details[0].message);
        var flg = {
          id: _model.flags.length + 1,
          car_id: value.car_id,
          reason: value.reason,
          description: value.description
        };

        _model.flags.push(flg);

        return res.status(200).send(flg);
      });
    }
  }]);

  return carController;
}();

var _default = new carController();

exports["default"] = _default;