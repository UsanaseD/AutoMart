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