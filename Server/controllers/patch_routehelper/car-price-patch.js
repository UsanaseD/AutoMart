const joi=require('@hapi/joi');
const {cars}=require('../../model/model');
module.exports.car=(req,res)=>{
    const schema=joi.object().keys({
        price:joi.number(),
    });
    joi.validate(req.body,schema,(err,value)=> {
        if (err) return res.send(err.details[0].message);
        const car=cars.find(car=>car.id==parseInt(req.params.id,10));
        if(!car) return res.send('the requested Id doesnt exist');
        car.price=value.price;
        return res.send(car);
    });
};