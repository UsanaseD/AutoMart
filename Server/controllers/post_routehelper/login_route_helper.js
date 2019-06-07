const joi = require('@hapi/joi');
const { users } = require('../../model/model');
const { loginschema } = require('../../helpers/schema');
const jsonwebtoken = require('jsonwebtoken');
const secretkey = require('../../config/config');

module.exports.login = (req, res) => {
 joi.validate(req.body,loginschema,(err,value)=>{
      if (err) return res.send(err.details[0].message);
      const user= {
          email:value.email,
          password:value.password,
      };

      users.push(user);
      jsonwebtoken.sign({
        email:user.email,
        password:user.password,
      },secretkey.SECRETKEY,(err,data)=>{
        user.token=data
        res.status(200).send(user);
      }
      );

      
  });
  };