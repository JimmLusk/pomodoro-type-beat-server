const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./model');
const { Tomat } = require('./tomatModel');
const router = express.Router();
const jsonParser = bodyParser.json();

router.post('/', jsonParser, (req, res, next) =>{
  let {username, password, name} = req.body;
  // Add validation here

  return User.find({username})
    .count()
    .then(count => {
      if(count > 0){
        // Check if another user already has that username
        return Promise.reject({
          code: 422,
          reason: 'ValidationError',
          message: 'Username already exists',
          location: 'username'
        });
      }
      console.log('before hash');
      return User.hashPassword(password);
    })
    .then(hash => {
      console.log('hased password');
      return User.create({
        username,
        password: hash,
        name,
      });
    })
    .then(user => {
      return res.status(201).json(user.serialize());
    })
    .catch(err => {
      if (err.reason === 'ValidationError') {
        return res.status(err.code).json(err);
      }
      res.status(500).json({code: 500, message: 'Internal server error'});
    });
});



router.get('/', (req, res) => {
  return User.find()
    .then(users => res.json(users.map(user => user.serialize())))
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});

module.exports = {router};