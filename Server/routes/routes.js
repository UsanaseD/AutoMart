const routerHelper_signup = require('../controllers/post_routehelper/signup_route_helper');
const routerHelper_login = require('../controllers/post_routehelper/login_route_helper');
const routehelper_car = require('../controllers/post_routehelper/car_route_helper');
const order_route_helper=require('../controllers/post_routehelper/order_route_helper');
const patch_order=require('../controllers/patch_routehelper/order_patch_helper');
const car_status_patch_route=require('../controllers/patch_routehelper/car_status_patch_route');
const car_price_route=require('../controllers/patch_routehelper/car-price-patch');
const get_unsold_cars=require('../controllers/get_routehelper/get_unsold_cars');
const get_unsold_cars_price=require('../controllers/get_routehelper/get_unsold_cars_with_price_range');
const get_all_cars=require('../controllers/get_routehelper/get_all_cars');
const post_flag_route=require('../controllers/post_routehelper/post_flag_route');
const get_car_status_state=require('../controllers/get_routehelper/get_car_status_state');
const get_all_orders=require('../controllers/get_routehelper/get_all_orders');
const midleware=require('../midleware/midleware');

module.exports.routeFunc = (app) => {
app.post('/api/v1/auth/signup', routerHelper_signup.signup);
app.post('/api/v1/auth/login', routerHelper_login.login);
app.post('/api/v1/car',midleware.midleware, routehelper_car.car);
app.post('/api/v1/order',midleware.midleware,order_route_helper.order);
app.post('/api/v1/flag',midleware.midleware,post_flag_route.flag);

app.patch('/api/v1/order/:id',midleware.midleware,patch_order.order);
app.patch('/api/v1/car/status/:id',midleware.midleware,car_status_patch_route.car);
app.patch('/api/v1/car/price/:id',midleware.midleware,car_price_route.car);

app.get('/api/v1/status/car',midleware.midleware,get_unsold_cars.car);
app.get('/api/v1/range/car',midleware.midleware,get_unsold_cars_price.car);
app.get('/api/v1/car',midleware.midleware,get_all_cars.car);
app.get('/api/v1/car/state/status',midleware.midleware,get_car_status_state.car);
app.get('/api/v1/all/order',midleware.midleware,get_all_orders.order);

}
