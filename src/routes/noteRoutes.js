// src/routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const {
  createNote,
  getNotes,
  getOneNote,
  updateNote,
  deleteNote
} = require('../controllers/noteController');

// 🔐 protect means JWT token is required
router.post('/', protect, createNote);        // CREATE
router.get('/', protect, getNotes);           // READ all
router.get('/:id', protect, getOneNote);      // READ one
router.put('/:id', protect, updateNote);      // UPDATE
router.delete('/:id', protect, deleteNote);   // DELETE

module.exports = router;
