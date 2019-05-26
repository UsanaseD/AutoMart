module.exports.signup = (req, res) => {
  const joi = require('@hapi/joi');
  const { users } = require('./model/model');

  const schema = joi.object().keys({
    email: joi.string().email({ minDomainSegments: 2 }),
    firstname:joi.string(),
    lastname:joi.string(),
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
