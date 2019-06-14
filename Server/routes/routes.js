import swaggerUi from 'swagger-ui-express';
import routcarController from '../controllers/carControllerClass';
import routUserController from '../controllers/userControllerClass';
import authMidleware from '../midleware/midleware';
import adminMidware from '../midleware/adminmware';
import swaggerific from '../../swagger.json';


export default (app) => {
  app.post('/api/v1/auth/signup', routUserController.signupPost);
  app.post('/api/v1/auth/login', routUserController.loginPost);
  app.post('/api/v1/car', authMidleware, routcarController.carPost);
  app.post('/api/v1/order', authMidleware, routcarController.orderPost);
  app.post('/api/v1/flag', authMidleware, routcarController.flagPost);

  app.patch('/api/v1/order/:id', authMidleware, routcarController.orderPatchStatus);
  app.patch('/api/v1/car/status/:id', authMidleware, authMidleware, routcarController.carPatchStatus);
  app.patch('/api/v1/car/price/:id', authMidleware, routcarController.carPatchPrice);

  // route to select a car by status
  app.get('/api/v1/car/status', authMidleware, routcarController.carsStatus);
  // route to select a car by status and price range
  app.get('/api/v1/car/range/', authMidleware, routcarController.CarsStatusPriceRange);
  // route to select all cars
  app.get('/api/v1/car', adminMidware, routcarController.getAllCars);
  // route to select cars by state and status
  app.get('/api/v1/car/state/status', authMidleware, routcarController.getCarStatusState);
  // route to select all orders
  app.get('/api/v1/order', adminMidware, routcarController.getAllOrders);
  // route to select car by id
  app.get('/api/v1/car/:id', authMidleware, routcarController.specifedCar);

  app.delete('/api/v1/car/:id', adminMidware, routcarController.deleteCar);

  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerific));
};
