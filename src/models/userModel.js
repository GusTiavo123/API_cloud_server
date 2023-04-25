const mongoose = require('mongoose');
const db = require('../config/db.js');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = db.model('User', userSchema);

module.exports = User;