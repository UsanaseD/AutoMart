const users = [];
const cars = [];
const orders = [
  {
    id: 1,
    car_id: 2,
    createdOn: '2019-05-28T09:04:20.989Z',
    status: 'pending',
    old_price_offered: 2000000,
    new_price_offered: 2500000,
  },
  {
    id: 2,
    car_id: 2,
    createdOn: '2019-05-28T09:04:20.989Z',
    status: 'rejected',
    old_price_offered: 2000000,
    new_price_offered: 2500000,  
  },
];
module.exports.users = users;
module.exports.cars = cars;
module.exports.orders = orders;

