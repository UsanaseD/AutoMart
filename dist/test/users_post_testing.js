"use strict";

var _chai = require("chai");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("../server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _chai.should)();
(0, _chai.use)(_chaiHttp["default"]); // testing of signup

it('testing of signup', function (done) {
  (0, _chai.request)(_server["default"]).post('/api/v1/auth/signup').send({
    firstname: 'Didier',
    lastname: 'Usanase',
    email: 'todiddy30@gmail.com',
    password: 'usanase10',
    admin: true,
    address: 'kk199st'
  }).end(function (err, data) {
    data.should.have.status(200);
    done();
  });
});
describe('testing of users endpoints', function () {
  // testing of login
  it('testing of login', function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/auth/login').send({
      email: 'todiddy30@gmail.com',
      password: 'usanase10'
    }).end(function (err, data) {
      data.should.have.status(200);
      done();
    });
  });
});