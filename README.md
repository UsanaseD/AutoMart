[![Coverage Status](https://coveralls.io/repos/github/UsanaseD/AutoMart/badge.svg?branch=develop)](https://coveralls.io/github/UsanaseD/AutoMart?branch=develop) [![Build Status](https://travis-ci.org/UsanaseD/AutoMart.svg?branch=develop)](https://travis-ci.org/UsanaseD/AutoMart)

## Auto Mart
Auto Mart is an online marketplace for automobiles of diverse makes, model or body type.  Auto Mart, users can sell their cars or buy from trusted dealerships or private sellers. 

## Install / Getting Started

make sure you have [Node Js](https://nodejs.org/en/download/) running on your system to Install Auto Mart

## Folder Structure
Project Structure

```bash
Server/
   config/
   controllers/
   helpers/
   middleware/
   model/
   routes/
   test/
   server.js
```
## Developing
To run this Web App follow the following steps

```bash
git clone https://github.com/UsanaseD/AutoMart

cd AutoMart
 npm install   #'Install dependencies'
 npm run start #'past http://localhost:8000/ in your browser'
```
## Building

```bash
npm run transpile # ' Transpile your ES6 code into ./dist forlder'
npm run test  #'run the test '
```
## Features

* Authentication system
* API endpoints

## EndPoints

To test all these endpoints localally you should use postman chrom

* car endpoints

```bash
/api/v1/car #'endpoint to post a car'
/api/v1/car/status/:id # 'endpoint to select a car by status & id'
/api/v1/car/price/:id #'endpoint to select a car by price & id'
/api/v1/status/car  #'endpoint to select a car by status'
/api/v1/range/car   #'endpoint to select a car by price range'
/api/v1/car #'endpoint to select all cars'
/api/v1/car/state/status #'endpoint to select a car by state & status'
```
* Authentication endpoints
```bash
/api/v1/auth/signup #'endpoint to signup'
/api/v1/auth/login  #'endpoint to login'
```
* Ordering endpoints
```bash
/api/v1/order #'endpoint to press an order'
/api/v1/all/order  #'endpoint to see all orders'
```
* flagging endpoint
```bash
/api/v1/flag #'endpoint to flag a car'
```