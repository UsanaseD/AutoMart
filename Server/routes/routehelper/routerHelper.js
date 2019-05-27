module.exports.signup = (req, res) => {
  const joi = require('@hapi/joi');
  const { users } = require('./model/model');
  const schema = joi.object().keys({
    email: joi.string().email({ minDomainSegments: 2 }),
    firstname: joi.string(),
    lastname: joi.string(),
  });
  joi.validate(req.body, schema, (err, value) => {
    if (err) return res.send(err.details[0].message);
    const user = {
      id: users.length + 1,
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email,
    };
    users.push(user);
    res.status(200).send(user);
  });
};
module.exports.login = (req, res) => {
  const joi = require('@hapi/joi');
  const { users } = require('./model/model');
  const schema = joi.object().keys({
    id: joi.number().integer(),
    firstname: joi.string(),
    lastname: joi.string(),
    email: joi.string().email({ minDomainSegments: 2 }),
  });
joi.validate(req.body,schema,(err,value)=>{
    if (err) return res.send(err.details[0].message);
    const user= {
        id: value.id,
        firstname:value.firstname,
        lastname:value.lastname,
        email:value.email,
    };
    users.push(user);
    res.status(200).send(user);
});
};

module.exports.car=(req,res)=>{
    const joi=require('@hapi/joi');
    const{cars}=require('./model/model');
    const schema=joi.object().keys({
    email:joi.string().email({minDomainSegments: 2 }),
    manufacturer:joi.string(),
    model:joi.string(),
    price:joi.number().integer(),
    state:joi.string(),
    status:joi.string(),
    });
    joi.validate(req.body,schema,(err,value)=>{
      if (err) return res.send(err.details[0].message);
      const ride={
        id:cars.length+1,
        email:value.email,
        date:new Date(),
        manufacturer:value.manufacturer,
        model:value.model,
        price:value.price,
        state:value.state,
        status:value.status,
      };
      cars.push(ride);
      res.status(200).send(ride);
    });
};