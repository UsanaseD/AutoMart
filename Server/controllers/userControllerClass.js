import joi from '@hapi/joi';
import { sign } from 'jsonwebtoken';
import bycript from 'bcrypt';
import { users } from '../model/model';
import { loginschema, signupschema } from '../helpers/schema';
import userFunc from '../helpers/helperFunc';

class userController {
  // function to create login feature

  loginPost(req, res) {
    joi.validate(req.body, loginschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const foundUser = users.find(user => user.email === value.email);
      if (!foundUser) return res.status(405).send('email not exists');
      bycript.compare(value.password, foundUser.password, (err, result) => {
        if (!result) return res.send('password doesnt match');
        sign({
          email: foundUser.email,
          password: foundUser.password,
          admin: foundUser.admin,
        },

        process.env.SECRETKEY, (err, data) => {
          foundUser.token = data;
          res.status(200).send(foundUser);
        });
      });
    });
  }


  // function to create signup feature
  signupPost(req, res) {
    joi.validate(req.body, signupschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      bycript.hash(value.password, 9, (err, hashdpsswd) => {
        if (err) return res.send('sorry reenter your password');
        const foundUser = users.find(user => user.email === value.email);
        if (foundUser) return res.status('409').send('email already exists');
        const Newuser = {
          id: users.length + 1,
          firstname: value.firstname,
          lastname: value.lastname,
          address: value.address,
          admin: value.admin,
          email: value.email,
          password: hashdpsswd,
        };
        users.push(Newuser);
        sign({
          email: Newuser.email,
          password: Newuser.password,
          admin: Newuser.admin,
        },

        process.env.SECRETKEY, (err, data) => {
          Newuser.token = data;
          res.status(200).send(userFunc(Newuser));
        });
      });
    });
  }
}
export default new userController();
