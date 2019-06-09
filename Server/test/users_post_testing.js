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
        email:'todidy20@gmil.com',
        password:'usanase100',
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
        email: 'todiddy30@gmail.com',
        password:'usanase10',
      }).end((err, data) => {
        data.should.have.status(200);
        done();
      });
  });
});
