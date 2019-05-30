const joi = require('@hapi/joi');
const{flags} = require('../model/model');

module.exports.flag=(req,res)=>{
    const schema=joi.object().keys({
        car_id:joi.number().integer(),
        reason:joi.string(),
        description:joi.string(),
    });
    joi.validate(req.body,schema,(err,value) => {
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