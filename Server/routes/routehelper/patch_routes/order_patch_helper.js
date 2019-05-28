const joi = require('@hapi/joi');
const { orders } = require('../model/model');

module.exports.order = (req, res) => {
  const order = orders.find(order => order.id == parseInt(req.params.id, 10) && order.status == 'pending');
  if (!order) return res.send('the stated id doesnt exist or the status is not pending');
  order.new_price_offered = req.body.price;
  return res.send(order);

};
