const chai = require('chai');
const chaihttp=require('chai-http');
const {app}=require('../../server');

chai.should();
chai.use(chaihttp);

describe('car endpoint testing', () => { // test case
// test suite
  it('place for seller to post a car', (done) => {
    chai.request(app)
      .post('/api/v1/car')
      .send({
        email: 'todiddy20@gmail.com',
        manufacturer: 'toyota',
        model: 'corola',
        price: 4000000,
        state: 'old',
        status: 'available',
      }).end((err, response) => {
        response.should.have.status(200);
        done();
      });


  });
//test to update a car's status by id
  it('place for end users to update a car s  status by id', (done) => {
    chai.request(app)
      .get('/api/v1/car').end((err, data) => {
        chai.request(app)
          .patch(`/api/v1/car/status/${data.body[0].id}`)
          .send({
            status: 'old',
          })
          .end((err, response) => {
          response.body.should.be.a('object');    
            done();
          });
      });
      });
   //test to update a car's price by id    
   it('place for end users to update a car s  price by id', (done) => {
    chai.request(app)
      .get('/api/v1/car').end((err, data) => {
        chai.request(app)
          .patch(`/api/v1/car/price/${data.body[0].id}`)
          .send({
            price: 6000000,
          })
          .end((err, response) => {
          response.body.should.be.a('object');    
            done();
          });
      });
      });
//test to get cars by status 
it('place for end users to select cars by status',(done)=>{
  chai.request(app)
  .get('/api/v1/status/car')
  .query({status:'available'})
  .end((err, data) => {
    data.body.should.be.a('array');    
    done();
  });
});

//test to get cars by status and price range
it('test to get cars by status and price range',(done)=>{
  chai.request(app)
  .get('/api/v1/range/car')
  .query({status:'available',mini_price:2000000,max_price:5000000})
  .end((err, data) => {
    data.body.should.be.a('array');    
    done();
  });
});
//test to get cars by status and state
it('test to get cars by status and state',(done)=>{
  chai.request(app)
  .get('/api/v1/car/state/status')
  .query({status:'available',state:'new'})
  .end((err, data) => {
    data.body.should.be.a('array');   
    done();
  });
});
//test to display all cars
it('test to get all cars',(done)=>{
  chai.request(app)
  .get('/api/v1/range/car')
  .end((err, data) => {
    data.body.should.be.a('array');   
    done();
  });
});
});
