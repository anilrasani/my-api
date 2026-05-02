// src/controllers/noteController.js
const Note = require('../models/Note');

// ── CREATE a note ─────────────────────
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = await Note.create({
      title,
      content,
      user: req.user.id  // comes from JWT middleware
    });

    res.status(201).json({ message: '✅ Note created!', note });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ── READ all notes ────────────────────
const getNotes = async (req, res) => {
  try {
    // only get notes belonging to logged in user
    const notes = await Note.find({ user: req.user.id });

    res.json(notes);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ── READ one note ─────────────────────
const getOneNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json(note);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ── UPDATE a note ─────────────────────
const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }  // return the updated note
    );

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json({ message: '✅ Note updated!', note });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ── DELETE a note ─────────────────────
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json({ message: '✅ Note deleted!' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createNote, getNotes, getOneNote, updateNote, deleteNote };
