const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const TomatSchema = mongoose.Schema({
  type: {
    type: String,
  },
  varity: {
    type: String,
    default: 'normal',
  }
},{timestamps: true});

const Tomat = mongoose.model('Tomat', TomatSchema);

module.exports = { Tomat, TomatSchema };