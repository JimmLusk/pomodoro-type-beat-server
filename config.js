'use strict';

module.exports = {
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  PROD_CLIENT_ORIGIN: 'https://confident-torvalds-906f7b.netlify.com',
  DEV_DATABASE_URL: 
    process.env.DEV_DATABASE_URL || 'mongodb://localhost/pomodoro-dev',
  DATABASE_URL: 
    process.env.DATABASE_URL || 'mongodb://localhost/pomodoro',
  // TEST_DATABASE_URL:
  //     process.env.TEST_DATABASE_URL ||
  //     mongodb://localhost/thinkful-backend-test',
  JWT_SECRET : process.env.JWT_SECRET,
  JWT_EXPIRY : process.env.JWT_EXPIRY || '7d' ,
};
