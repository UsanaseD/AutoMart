import joi from '@hapi/joi';
import { cars, orders, flags } from '../model/model';
import {
  statusSchema, priceschema,
  orderschema, flagschema,
  orderpatchschema, carschema,
} from '../helpers/schema';
import { stat } from 'fs';

class carController {
// function to select all cars
  getAllCars(req, res) {
    res.status(200).send(cars);

  }

  // function to select all orders
  getAllOrders(req, res) {
    res.status(200).send(orders);
  }

  // function to select cars by state & status
  getCarStatusState(req, res) {
    const car = cars.filter(car => car.status == req.query.status && (car.state == req.query.state));
    res.status(200).send(car);
  }

  // function to select cars by stateus & pricerange
  CarsStatusPriceRange(req, res) {
    const { status } = req.query;
    const minPrice = parseInt(req.query.min_price, 10);
    const maxPrice = parseInt(req.query.max_price, 10);

    const range = [];

    cars.forEach((car) => {

      if (car.status == status && ((minPrice <= car.price) && (car.price <= maxPrice))) {
        range.push(car);
      }

    });

    res.status(200).send(range);
  }

  // function to select cars by status
  carsStatus(req, res) {
    const car = cars.filter(car => car.status == req.query.status);
    if (!car) return res.send('there is no cars with Available Status');
    res.status(200).send(car);
  }

  //function to select a car by id

  specifedCar(req, res) {
    const car = cars.find(car => car.id == req.params.id);
    if (!car) return res.send('there is no cars with this Id');
    res.status(200).send(car);
  }

//function to to delete a specified car

deleteCar(req, res){
  joi.validate(req.body, statusSchema, (err, value) =>{
    if (err) return res.send(err.details[0].message);
    const car = cars.find(car => car.id == parseInt(req.params.id,10));
    if (!car) return res.status(404).send('the id provided does not exist');
    const index = cars.indexOf(car);
    cars.splice(index,1);
    res.send(car);
  });
};

  // function to update a car's status
  carPatchStatus(req, res) {
    joi.validate(req.body, statusSchema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const car = cars.find(car => car.id == parseInt(req.params.id, 10));
      if (!car) return res.send('the id provided does not exist');
      car.status = value.status;
      return res.status(200).send(car);
    });
  }

  // function to update a car's price
  carPatchPrice(req, res) {
    joi.validate(req.body, priceschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const car = cars.find(car => car.id == parseInt(req.params.id, 10));
      if (!car) return res.send('the requested Id doesnt exist');
      car.price = value.price;
      return res.send(car);
    });
  }

  // function to update an order's status
  orderPatchStatus(req, res) {
    joi.validate(req.body, orderpatchschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const order = orders.find(order => order.id == parseInt(req.params.id, 10) && order.status == 'pending');
      if (!order) return res.send('the stated id doesnt exist or the status is not pending');
      order.new_price_offered = value.new_price_offered;
      return res.send(order);
    });
  }

  // function to create a car
  carPost(req, res) {
    joi.validate(req.body, carschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const ride = {
        id: cars.length + 1,
        email: value.email,
        date: new Date(),
        manufacturer: value.manufacturer,
        model: value.model,
        price: value.price,
        state: value.state,
        status: 'Available',
      };
      cars.push(ride);
      res.status(200).send(ride);
    });
  }

  // function to create an order
  orderPost(req, res) {
    joi.validate(req.body, orderschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const ordr = {
        id: orders.length + 1,
        car_id: value.car_id,
        createdOn: new Date(),
        status: value.status,
        old_price_offered: value.old_price_offered,
        new_price_offered: value.new_price_offered,
      };
      orders.push(ordr);
      res.status(200).send(ordr);
    });
  }

  // function to create a flag
  flagPost(req, res) {
    joi.validate(req.body, flagschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const flg = {
        id: flags.length + 1,
        car_id: value.car_id,
        reason: value.reason,
        description: value.description,
      };
      flags.push(flg);
      return res.status(200).send(flg);
    });
  }
}

export default new carController();
