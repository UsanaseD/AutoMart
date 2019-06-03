const {cars}=require('../model/model');
module.exports.car=(req,res)=>{
    const car=cars.filter(car=>car.status==req.query.status && (car.state==req.query.state));
     if(car.length==0) return res.send('there is no car with mentioned requirements');
     return res.status(200).send(car);
    };
