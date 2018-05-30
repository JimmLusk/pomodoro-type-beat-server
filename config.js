'use strict';

module.exports = {
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  MONGODB_URI: 
    process.env.MONGODB_URI || 'mongodb://localhost/pomodoro',
  DATABASE_URL:
    'mongodb://dev:sh33tz@ds139970.mlab.com:39970/pomodoro-type-beat',
  // TEST_DATABASE_URL:
  //     process.env.TEST_DATABASE_URL ||
  //     mongodb://localhost/thinkful-backend-test'
};
