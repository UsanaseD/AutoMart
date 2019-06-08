import { should , use, request } from 'chai';
import chaihttp from 'chai-http';
import app from '../../server';

should();
use(chaihttp);
describe('order endpoints testing', () => {
  // test to create an order
  it('test to create an order', (done) => {
    request(app)
      .post('/api/v1/order')
      .send({
        car_id: 2,
        createdOn: '2019-05-28T09:04:20.989Z',
        status: 'pending',
        old_price_offered: 2000000,
        new_price_offered: 2500000,
      }).end((err, data) => {
        data.should.have.status(200);
        done();
      });
  });
  // test to update an order price by id
  it('test to update an order price by id', (done) => {
    request(app)
      .get('/api/v1/all/order').end((err, data) => {
        request(app)
          .patch(`/api/v1/order/${data.body[0].id}`)
          .send({
            new_price_offered: 5000000,
          }).end((err, response) => {
            response.should.be.a('object');
            done();
          });
      });
  });
  // test to show all orders
  it('test to show all orders', (done) => {
    request(app)
      .get('/api/v1/all/order').end((err, data) => {
        data.body.should.have.a('array');
        done();
      });
  });
});
