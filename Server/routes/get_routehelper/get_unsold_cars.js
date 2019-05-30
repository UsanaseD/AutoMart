const {cars} = require ('../model/model');

module.exports.car=(req,res)=>{
    const car=cars.find(car=>car.status==req.query.status);
    if(!car) return res.send('there is no cars with Available Status');
     res.send(car);
};