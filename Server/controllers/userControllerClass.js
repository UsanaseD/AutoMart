import joi from '@hapi/joi';
import { sign } from 'jsonwebtoken';
import { SECRETKEY } from '../config/config';
import { users } from '../model/model';
import { loginschema, signupschema } from '../helpers/schema';

class userController {
  // function to create login feature
  loginPost(req, res) {
    joi.validate(req.body, loginschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const user = {
        email: value.email,
        password: value.password,
      };

      users.push(user);
      sign({
        email: user.email,
        password: user.password,
      }, 

      SECRETKEY, (err, data) => {
        user.token = data;
        res.status(200).send(user);
      },
      );


    });
  }

  // function to create signup feature
  signupPost(req, res) {
    joi.validate(req.body, signupschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const user = {
        id: users.length + 1,
        firstname: value.firstname,
        lastname: value.lastname,
        email: value.email,
      };
      users.push(user);
      sign({
        id: user.id,
        email: user.email,
      },

      SECRETKEY, (err, data) => {
        user.token = data;
        res.status(200).send(user);
      },

      );

    });
  }
}

export default new userController ();