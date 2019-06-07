const joi=require('@hapi/joi');
const {cars}=require('../../model/model');
const {statusSchema} = require('../../helpers/schema');
module.exports.car=(req,res)=>{
    joi.validate(req.body,statusSchema,(err, value)=>{
    if (err) return res.send(err.details[0].message);
    const car=cars.find(car=>car.id==parseInt(req.params.id,10));
    if(!car) return res.send('the id provided does not exist');
    car.status=value.status;
    return res.status(200).send(car);
});
};