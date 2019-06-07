const {cars} = require ('../../model/model');
module.exports.car =(req,res)=>{
    const status = req.query.status;
    const minPrice = parseInt(req.query.min_price,10);
    const maxPrice = parseInt(req.query.max_price,10);

    const range = [];

    cars.forEach( car =>{

        if(car.status == status && ((minPrice <= car.price)&& (car.price <= maxPrice))){
            range.push(car);
        }

    });

     res.status(200).send(range);
};