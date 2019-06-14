import jsonwebtoken from 'jsonwebtoken';
import secretkey from '../config/config';
export default (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  jsonwebtoken.verify(token, secretkey.SECRETKEY, (err, data) => {
    if (err) return res.status(403).send('invalid token');
    if (!data.admin) return res.status(403).send('you are not admi');
    next();
  });
};
