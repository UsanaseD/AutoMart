const {cars} = require ('../model/model');

module.exports.car=(req,res)=>{
    const car=cars.filter(car=>car.status==req.query.status && (car.price<=req.query.max_price || car.price >= req.query.min_price));
    if(!car) return res.send('there is no cars with Available Status');
     res.status(200).send(car);
};