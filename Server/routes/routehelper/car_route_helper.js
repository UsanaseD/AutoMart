const joi=require('@hapi/joi');
const{cars}=require('./model/model');
module.exports.car=(req,res)=>{
    const schema=joi.object().keys({
    email:joi.string().email({minDomainSegments: 2 }),
    manufacturer:joi.string(),
    model:joi.string(),
    price:joi.number().integer(),
    state:joi.string(),
    status:joi.string(),
    });
    joi.validate(req.body,schema,(err,value)=>{
      if (err) return res.send(err.details[0].message);
      const ride={
        id:cars.length+1,
        email:value.email,
        date:new Date(),
        manufacturer:value.manufacturer,
        model:value.model,
        price:value.price,
        state:value.state,
        status:value.status,
      };
      cars.push(ride);
      res.status(200).send(ride);
    });
};