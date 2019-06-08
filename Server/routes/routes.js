import routcarController from '../controllers/carControllerClass';
import routUserController from '../controllers/userControllerClass';
import authMidleware from '../midleware/midleware';

export default (app) => {
app.post('/api/v1/auth/signup', routUserController.signupPost);
app.post('/api/v1/auth/login', routUserController.signupPost);
app.post('/api/v1/car',routcarController.carPost);
app.post('/api/v1/order',routcarController.orderPost);
app.post('/api/v1/flag',routcarController.flagPost);

app.patch('/api/v1/order/:id',routcarController.orderPatchStatus);
app.patch('/api/v1/car/status/:id',routcarController.carPatchStatus);
app.patch('/api/v1/car/price/:id',routcarController.carPatchPrice);

app.get('/api/v1/status/car',routcarController.carsStatus);
app.get('/api/v1/range/car',routcarController.CarsStatusPriceRange);
app.get('/api/v1/car',routcarController.getAllCars);
app.get('/api/v1/car/state/status',routcarController.getCarStatusState);
app.get('/api/v1/all/order',routcarController.getAllOrders);

}
