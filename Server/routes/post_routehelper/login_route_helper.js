const joi = require('@hapi/joi');
const { users } = require('../model/model');
module.exports.login = (req, res) => {
    const schema = joi.object().keys({
      email: joi.string().email({ minDomainSegments: 2 }),
    });
  joi.validate(req.body,schema,(err,value)=>{
      if (err) return res.send(err.details[0].message);
      const user= {
          email:value.email,
          password:value.password,
      };
      users.push(user);
      res.status(200).send(user);
  });
  };