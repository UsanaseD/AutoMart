const joi = require('@hapi/joi');
const { users } = require('../../model/model');
const { signupschema } = require('../../helpers/schema');
const jsonwebtoken = require('jsonwebtoken');
const secretkey = require('../../config/config');

module.exports.signup = (req, res) => {
  joi.validate(req.body, signupschema, (err, value) => {
    if (err) return res.send(err.details[0].message);
    const user = {
      id: users.length + 1,
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email,
    };
    users.push(user);
    jsonwebtoken.sign({
      id: user.id,
      email: user.email,
    },

    secretkey.SECRETKEY, (err, data) => {
      user.token = data;
      res.status(200).send(user);
    },

    );

  });
};


