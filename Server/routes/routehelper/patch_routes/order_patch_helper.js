const joi = require('@hapi/joi');
const { orders } = require('../model/model');

module.exports.order = (req, res) => {
  const schema = joi.object().keys({
    new_price_offered: joi.number().integer(),
  });
  joi.validate(req.body, schema, (err, value) => {
    if (err) return res.send(err.details[0].message);
    const order = orders.find(order => order.id == parseInt(req.params.id, 10) && order.status == 'pending');
    if (!order) return res.send('the stated id doesnt exist or the status is not pending');
    order.new_price_offered = value.new_price_offered;
    return res.send(order);

  });
};
