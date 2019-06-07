const joi = require('@hapi/joi');
const { orders } = require('../../model/model');
const { orderpatchschema } = require('../../helpers/schema');
module.exports.order = (req, res) => {

  joi.validate(req.body, orderpatchschema, (err, value) => {
    if (err) return res.send(err.details[0].message);
    const order = orders.find(order => order.id == parseInt(req.params.id, 10) && order.status == 'pending');
    if (!order) return res.send('the stated id doesnt exist or the status is not pending');
    order.new_price_offered = value.new_price_offered;
    return res.send(order);

  });
};
