const joi = require('@hapi/joi');
const { cars } = require('../../model/model');
const { carschema } = require('../../helpers/schema');

module.exports.car=(req,res)=>{
    joi.validate(req.body,carschema,(err,value)=>{
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