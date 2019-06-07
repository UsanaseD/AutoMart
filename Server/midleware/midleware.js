const jsonwebtoken = require('jsonwebtoken');
const secretkey= require('../config/config');
module.exports.midleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  jsonwebtoken.verify(token,secretkey.SECRETKEY,(err,data)=>{
 if (err) return res.status(403).send('invalid token');
 next();
  });
}; 
