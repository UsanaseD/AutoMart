const {cars} = require ('../model/model');

module.exports.car=(req,res)=>{
    return res.status(200).send(cars);
};