// src/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');
const User = require('../models/User');
const Note = require('../models/Note');

// 🔐 both protect AND adminOnly required for these routes

// GET all users — admin only
router.get('/users', protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find().select('-password'); // hide passwords
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all notes — admin only
router.get('/notes', protect, adminOnly, async (req, res) => {
  try {
    const notes = await Note.find().populate('user', 'name email');
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE any user — admin only
router.delete('/users/:id', protect, adminOnly, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: '✅ User deleted!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;