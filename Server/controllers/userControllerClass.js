import joi from '@hapi/joi';
import { sign } from 'jsonwebtoken';
import config from '../config/config';
import { users } from '../model/model';
import { loginschema, signupschema } from '../helpers/schema';

class userController {
  // function to create login feature
  loginPost(req, res) {
    joi.validate(req.body, loginschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const foundUser = users.find(user => user.email === value.email);
      if(!foundUser) return res.status(409).send('email not exists')
      sign({
        email: foundUser.email,
        password: foundUser.password,
      }, 

      config.SECRETKEY, (err, data) => {
        foundUser.token = data;
        res.status(200).send(foundUser);
      },
      );


    });
  }

  // function to create signup feature
  signupPost(req, res) {
    joi.validate(req.body, signupschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
     const foundUser = users.find(user => user.email === value.email);
     if(foundUser) return res.status(200).send('email already exists')
      const Newuser = {
        id: users.length + 1,
        firstname: value.firstname,
        lastname: value.lastname,
        email: value.email,
        password: value.password,
      };
      users.push(Newuser);
      sign({
        email: Newuser.email,
        password: Newuser.password,
      },

      config.SECRETKEY, (err, data) => {
        Newuser.token = data;
        res.status(200).send(Newuser);
      },

      );

    });
  }
}

export default new userController ();