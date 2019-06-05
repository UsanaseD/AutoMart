const chai=require('chai');
const chaihttp=require('chai-http');
const {app}=require('../routes/routes');
 
chai.should();
chai.use(chaihttp)

describe('testing of users endpoints',()=>{
    //testing of flags
    it('testing of flags',(done)=>{
        chai.request(app)
        .post('/api/v1/flag')
        .send({
            car_id:2,
            reason:'its a stolen car',
            description:'its description meets a stolen car in remera',
        }).end((err,data)=>{
            data.should.have.status(200);
            done();
        })
    })
})