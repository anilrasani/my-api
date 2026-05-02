// src/models/Note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true    // title is compulsory
  },
  content: {
    type: String,
    required: true    // content is compulsory
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',      // links note to the user who created it
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);