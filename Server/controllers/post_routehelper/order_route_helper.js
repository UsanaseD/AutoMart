const joi=require('@hapi/joi');
const {orders}=require('../../model/model');
module.exports.order=(req,res)=>{
    const schema=joi.object().keys({
        car_id:joi.number().integer(),
        status:joi.string(),
        old_price_offered:joi.number().integer(),
        new_price_offered:joi.number().integer(),
    });
    console.log(req.body);
    joi.validate(req.body,schema,(err,value)=>{
         if(err) return res.send(err.details[0].message);
         const ordr={
             id:orders.length+1,
             car_id:value.car_id,
             createdOn:new Date(),
             status:value.status,
             old_price_offered:value.old_price_offered,
             new_price_offered:value.new_price_offered,
         };
         orders.push(ordr);
         res.status(200).send(ordr);
    });
};