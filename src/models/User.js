// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true    // name is compulsory
  },
  email: {
    type: String,
    required: true,
    unique: true      // no two users can have same email
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true }); // auto saves date & time

module.exports = mongoose.model('User', userSchema);
