'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { DATABASE_URL, DEV_DATABASE_URL } = require('./config');

function dbConnect(url = DEV_DATABASE_URL) {
  return mongoose.connect(url)
    .then(instance => {
      const conn = instance.connections[0];
      console.info(`Connected to: mongodb://${conn.host}:${conn.port}/${conn.name}`);
    })
    .catch(err => {
      console.error('Mongoose failed to connect');
      console.error(err);
    });
}

function dbDisconnect() {
  return mongoose.disconnect();
}

function dbGet() {
  return mongoose;
}

module.exports = {
  dbConnect,
  dbDisconnect,
  dbGet
};
