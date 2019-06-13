"use strict";

var _chai = require("chai");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("../../server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// test frame work
// toenable chai to make a request using http
// to call server
(0, _chai.should)();
(0, _chai.use)(_chaiHttp["default"]);
describe('car endpoint testing', function () {
  // test case
  before(function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/auth/signup').send({
      firstname: 'Didier',
      lastname: 'Usanase',
      email: 'todiddy20@gmail.com',
      password: 'usanase10',
      admin: true,
      address: 'kk199st'
    }).end(function (err, userData) {
      var token = userData.body.token;
      global.myToken = token;
      done();
    });
  }); // test for seller to post a car

  it('place for seller to post a car', function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/car').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send({
      email: "todiddy20@gmail.com",
      manufacturer: "manufacturer",
      model: "value.model",
      price: 3000,
      state: "new",
      status: "old"
    }).end(function (err, response) {
      response.should.have.status(200);
      done();
    });
  }); // test to display all cars

  it('test to get all cars', function (done) {
    (0, _chai.request)(_server["default"]).get('/api/v1/car').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).end(function (err, data) {
      data.body.should.be.a('array');
      done();
    });
  }); // test to create an order

  it('test to create an order', function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/order').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send({
      car_id: 2,
      createdOn: '2019-05-28T09:04:20.989Z',
      status: 'pending',
      old_price_offered: 2000000,
      new_price_offered: 2500000
    }).end(function (err, data) {
      data.should.have.status(200);
      done();
    });
  }); // test to update a car's status by id

  it('place for end users to update a car s  status by id', function (done) {
    (0, _chai.request)(_server["default"]).patch('/api/v1/car/status/1').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send({
      status: 'old'
    }).end(function (err, response) {
      response.body.should.be.a('object');
      done();
    });
  }); // test for enduser to select a spesific car

  it('test for enduser to select a spesific car', function (done) {
    (0, _chai.request)(_server["default"]).get('/api/v1/car/1').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).end(function (err, response) {
      response.body.should.be.a('object');
      done();
    });
  }); // test to update a car's price by id

  it('place for end users to update a car s  price by id', function (done) {
    (0, _chai.request)(_server["default"]).patch('/api/v1/car/price/1').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send({
      price: 6000000
    }).end(function (err, response) {
      response.body.should.be.a('object');
      done();
    });
  }); // test to get cars by status

  it('place for end users to select cars by status', function (done) {
    (0, _chai.request)(_server["default"]).get('/api/v1/car/status').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).query({
      status: 'available'
    }).end(function (err, data) {
      data.body.should.be.a('array');
      done();
    });
  }); // test to get cars by status and price range

  it('test to get cars by status and price range', function (done) {
    (0, _chai.request)(_server["default"]).get('/api/v1/car/range').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).query({
      status: 'available',
      mini_price: 2000000,
      max_price: 5000000
    }).end(function (err, data) {
      data.body.should.be.a('array');
      done();
    });
  }); // test to get cars by status and state

  it('test to get cars by status and state', function (done) {
    (0, _chai.request)(_server["default"]).get('/api/v1/car/state/status').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).query({
      status: 'available',
      state: 'new'
    }).end(function (err, data) {
      data.body.should.be.a('array');
      done();
    });
  }); // testing of flags

  it('testing of flags', function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/flag').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send({
      car_id: 2,
      reason: 'its a stolen car',
      description: 'its description meets a stolen car in remera'
    }).end(function (err, data) {
      data.should.have.status(200);
      done();
    });
  }); // test to show all orders

  it('test to show all orders', function (done) {
    (0, _chai.request)(_server["default"]).get('/api/v1/order').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).end(function (err, data) {
      data.body.should.have.a('array');
      done();
    });
  }); // test to update an order price by id

  it('test to update an order price by id', function (done) {
    (0, _chai.request)(_server["default"]).patch('/api/v1/order/1').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send({
      new_price_offered: 5000000
    }).end(function (err, response) {
      response.should.be.a('object');
      done();
    });
  });
});
it('test for enduser to delete a spesific car', function (done) {
  (0, _chai.request)(_server["default"])["delete"]('/api/v1/car/1').set({
    Authorization: "Bearer ".concat(global.myToken)
  }).end(function (err, response) {
    response.body.should.be.a('object');
    done();
  });
});