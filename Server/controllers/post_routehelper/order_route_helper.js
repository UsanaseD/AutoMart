const joi=require('@hapi/joi');
const {orders}=require('../../model/model');
const{orderschema} = require('../../helpers/schema');
module.exports.order=(req,res)=>{
    joi.validate(req.body,orderschema,(err,value)=>{
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