import { should, use, request } from 'chai';
import chaihttp from 'chai-http';
import app from '../../server';

should();
use(chaihttp);

describe('testing of users endpoints', () => {
  // testing of login
  it('testing of login', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'todiddy20@gmail.com',
        password: 'kigali',
      }).end((err, data) => {
        data.should.have.status(200);
        done();
      });
  });
  // testing of signup
  it('testing of signup', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstname: 'Didier',
        lastname: 'Usanase',
        email: 'todiddy20@gmail.com',
      }).end((err, data) => {
        data.should.have.status(200);
        done();
      });
  });
});
