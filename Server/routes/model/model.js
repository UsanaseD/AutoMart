const users = [];
const flags =[];
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
const cars = [
  {
    id:1,
    email:'todiddy20@gmail.com',
    manufacturer:'toyota',
    model:'corola',
    price: 3000000,
    state:'new',
    status:'available',
  },
  {
    id:2,
    email:'todiddy20@gmail.com',
    manufacturer:'toyota',
    model:'corola',
    price: 4000000,
    state:'old',
    status:'available',
  },
];
module.exports.users = users;
module.exports.cars = cars;
module.exports.orders = orders;
module.exports.flags= flags;

