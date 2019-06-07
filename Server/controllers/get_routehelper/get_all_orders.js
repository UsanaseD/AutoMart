const {orders} = require ('../../model/model');

module.exports.order=(req,res)=>{
    return res.status(200).send(orders);
};