const joi = require('@hapi/joi');
const{flags} = require('../../model/model');
const{flagschema} = require('../../helpers/schema');
module.exports.flag=(req,res)=>{
    joi.validate(req.body,flagschema,(err,value) => {
   if (err) return res.send(err.details[0].message);
   const flg={
    id:flags.length+1,
    car_id:value.car_id,
    reason:value.reason,
    description:value.description,
   };
   flags.push(flg);
   return res.status(200).send(flg);
    });
};