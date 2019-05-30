const express = require('express');
const app = express();
const routerHelper_signup = require('./post_routehelper/signup_route_helper');
const routerHelper_login = require('./post_routehelper/login_route_helper');
const routehelper_car = require('./post_routehelper/car_route_helper');
const order_route_helper=require('./post_routehelper/order_route_helper');
const patch_order=require('./patch_routehelper/order_patch_helper');
const car_status_patch_route=require('./patch_routehelper/car_status_patch_route');
const car_price_route=require('./patch_routehelper/car-price-patch');
const get_unsold_cars=require('./get_routehelper/get_unsold_cars');
app.use(express.json());


app.post('/api/v1/auth/signup', routerHelper_signup.signup);
app.post('/api/v1/auth/login', routerHelper_login.login);
app.post('/api/v1/car', routehelper_car.car);
app.post('/api/v1/order',order_route_helper.order);

app.patch('/api/v1/order/:id',patch_order.order);
app.patch('/api/v1/car/status/:id',car_status_patch_route.car);
app.patch('/api/v1/car/price/:id',car_price_route.car);
app.get('/api/v1/car',get_unsold_cars.car);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
