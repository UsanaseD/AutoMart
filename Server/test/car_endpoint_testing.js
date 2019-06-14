import { should, use, request } from 'chai';
import chaihttp from 'chai-http';
import app from '../server';

should();
use(chaihttp);

describe('car endpoint testing', () => { // test case
  before((done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstname: 'Didier',
        lastname: 'Usanase',
        email: 'todiddy20@gmail.com',
        password: 'usanase10',
        admin: true,
        address: 'kk199st',
      }).end((err, userData) => {
        const { token } = userData.body;
        global.myToken = token;
        done();
      });
  });
  // test for seller to post a car
  it('place for seller to post a car', (done) => {
    request(app)
      .post('/api/v1/car')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .send({
        email: 'todiddy20@gmail.com',
        manufacturer: 'manufacturer',
        model: 'value.model',
        price: 3000,
        state: 'new',
        status: 'old',
      })
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });

  // test to display all cars
  it('test to get all cars', (done) => {
    request(app)
      .get('/api/v1/car')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .end((err, data) => {
        data.body.should.be.a('array');
        done();
      });
  });

  // test to create an order
  it('test to create an order', (done) => {
    request(app)
      .post('/api/v1/order')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .send({
        car_id: 2,
        createdOn: '2019-05-28T09:04:20.989Z',
        status: 'pending',
        old_price_offered: 2000000,
        new_price_offered: 2500000,
      })
      .end((err, data) => {
        data.should.have.status(200);
        done();
      });
  });

  // test to update a car's status by id
  it('place for end users to update a car s  status by id', (done) => {
    request(app)
      .patch('/api/v1/car/status/1')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .send({
        status: 'old',
      })
      .end((err, response) => {
        response.body.should.be.a('object');
        done();
      });
  });

  // test for enduser to select a spesific car
  it('test for enduser to select a spesific car', (done) => {
    request(app)
      .get('/api/v1/car/1')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .end((err, response) => {
        response.body.should.be.a('object');
        done();
      });
  });

  // test to update a car's price by id
  it('place for end users to update a car s  price by id', (done) => {
    request(app)
      .patch('/api/v1/car/price/1')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .send({
        price: 6000000,
      })
      .end((err, response) => {
        response.body.should.be.a('object');
        done();
      });
  });
  // test to get cars by status
  it('place for end users to select cars by status', (done) => {
    request(app)
      .get('/api/v1/car/status')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .query({ status: 'available' })
      .end((err, data) => {
        data.body.should.be.a('array');
        done();
      });
  });

  // test to get cars by status and price range
  it('test to get cars by status and price range', (done) => {
    request(app)
      .get('/api/v1/car/range')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .query({ status: 'available', mini_price: 2000000, max_price: 5000000 })
      .end((err, data) => {
        data.body.should.be.a('array');
        done();
      });
  });
  // test to get cars by status and state
  it('test to get cars by status and state', (done) => {
    request(app)
      .get('/api/v1/car/state/status')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .query({ status: 'available', state: 'new' })
      .end((err, data) => {
        data.body.should.be.a('array');
        done();
      });
  });
  // testing of flags
  it('testing of flags', (done) => {
    request(app)
      .post('/api/v1/flag')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .send({
        car_id: 2,
        reason: 'its a stolen car',
        description: 'its description meets a stolen car in remera',
      })
      .end((err, data) => {
        data.should.have.status(200);
        done();
      });
  });

  // test to show all orders
  it('test to show all orders', (done) => {
    request(app)
      .get('/api/v1/order')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .end((err, data) => {
        data.body.should.have.a('array');
        done();
      });
  });
  // test to update an order price by id
  it('test to update an order price by id', (done) => {
    request(app)
      .patch('/api/v1/order/1')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .send({
        new_price_offered: 5000000,
      })
      .end((err, response) => {
        response.should.be.a('object');
        done();
      });
  });
});
// test for enduser to delete a spesific car
it('test for enduser to delete a spesific car', (done) => {
  request(app)
    .delete('/api/v1/car/1')
    .set({ Authorization: `Bearer ${global.myToken}` })
    .end((err, response) => {
      response.body.should.be.a('object');
      done();
    });
});
