const {cars} = require ('../../model/model');

module.exports.car=(req,res)=>{
    const car=cars.filter(car=>car.status==req.query.status);
    if(!car) return res.send('there is no cars with Available Status');
     res.status(200).send(car);
};