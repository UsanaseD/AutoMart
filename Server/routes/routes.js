const express = require('express');
const app = express();
const routerHelper_signup = require('./routehelper/signup_route_helper');
const routerHelper_login = require('./routehelper/login_route_helper');
const routehelper_car = require('./routehelper/car_route_helper');
const order_route_helper=require('./routehelper/order_route_helper');
app.use(express.json());


app.post('/api/v1/auth/signup', routerHelper_signup.signup);
app.post('/api/v1/auth/login', routerHelper_login.login);
app.post('/api/v1/car', routehelper_car.car);
app.post('/api/v1/order',order_route_helper.order);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
