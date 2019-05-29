const express = require('express');
const app = express();
const routerHelper_signup = require('./routehelper/signup_route_helper');
const routerHelper_login = require('./routehelper/login_route_helper');
const routehelper_car = require('./routehelper/car_route_helper');
const order_route_helper=require('./routehelper/order_route_helper');
const patch_order=require('./routehelper/patch_routes/order_patch_helper');
const car_patch_route=require('./routehelper/patch_routes/car_patch_route');
const car_price_route=require('./routehelper/patch_routes/car-price-patch');
app.use(express.json());


app.post('/api/v1/auth/signup', routerHelper_signup.signup);
app.post('/api/v1/auth/login', routerHelper_login.login);
app.post('/api/v1/car', routehelper_car.car);
app.post('/api/v1/order',order_route_helper.order);

app.patch('/api/v1/order/:id',patch_order.order);
app.patch('/api/v1/car/status/:id',car_patch_route.car);
app.patch('/api/v1/car/price/:id',car_price_route.car);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
