import { should , use, request } from 'chai';//test frame work
import chaihttp from 'chai-http';//toenable chai to make a request using http
import app from '../../server';//to call server
 
should();
use(chaihttp)

describe('testing of users endpoints',()=>{
    //testing of flags
    it('testing of flags',(done)=>{
        request(app)
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