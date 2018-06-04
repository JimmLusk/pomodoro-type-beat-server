const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { Tomat, TomatSchema } = require('./tomatModel');

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  tomats: [TomatSchema],

});

UserSchema.methods.serialize = function() {
  return {
    username: this.username || '',
    name: this.name || '',
    tomats: this.tomats,
    id: this._id,
  };
};

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 8);
};


const User = mongoose.model('User', UserSchema);

module.exports = { User };