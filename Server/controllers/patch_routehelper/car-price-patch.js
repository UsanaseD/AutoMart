const joi=require('@hapi/joi');
const {cars}=require('../../model/model');
const { priceschema } = require('../../helpers/schema');

module.exports.car=(req,res)=>{
    joi.validate(req.body,priceschema,(err,value)=> {
        if (err) return res.send(err.details[0].message);
        const car=cars.find(car=>car.id==parseInt(req.params.id,10));
        if(!car) return res.send('the requested Id doesnt exist');
        car.price=value.price;
        return res.send(car);
    });
};