import swaggerUi from 'swagger-ui-express';
import routcarController from '../controllers/carControllerClass';
import routUserController from '../controllers/userControllerClass';
import authMidleware from '../midleware/midleware';
import swaggerific from '../../swagger.json';

export default (app) => {
  app.post('/api/v1/auth/signup', routUserController.signupPost);
  app.post('/api/v1/auth/login', routUserController.signupPost);
  app.post('/api/v1/car', authMidleware, routcarController.carPost);
  app.post('/api/v1/order', authMidleware, routcarController.orderPost);
  app.post('/api/v1/flag', authMidleware, routcarController.flagPost);

  app.patch('/api/v1/order/:id', authMidleware, routcarController.orderPatchStatus);
  app.patch('/api/v1/car/status/:id', authMidleware, authMidleware, routcarController.carPatchStatus);
  app.patch('/api/v1/car/price/:id', authMidleware, routcarController.carPatchPrice);

  app.get('/api/v1/status/car', authMidleware, authMidleware, routcarController.carsStatus);
  app.get('/api/v1/range/car', authMidleware, routcarController.CarsStatusPriceRange);
  app.get('/api/v1/car', authMidleware, routcarController.getAllCars);
  app.get('/api/v1/car/state/status', authMidleware, routcarController.getCarStatusState);
  app.get('/api/v1/all/order', authMidleware, routcarController.getAllOrders);
  app.use('/',swaggerUi.serve,swaggerUi.setup(swaggerific));
};
