// routes/api/Note.cjs
const express = require("express");
const router = express.Router();
const Note = require("../../models/note.cjs");
// const notesCtrl = require("../../controllers/api/note.cjs");

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next(); // User is authenticated, proceed to the route handler
  }
  res.status(401).json({ error: "Unauthorized" });
}

// Create a new note (requires authentication)
router.post("/", isAuthenticated, async (req, res) => {
  try {
    // Associate the note with the authenticated user
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content,
      user: req.user._id,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create a new note" });
  }
});

// Get all notes (requires authentication)
router.get("/", isAuthenticated, async (req, res) => {
  console.log("Received GET request for /api/note");
  try {
    const notes = await Note.find({ user: req.user._id });
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve notes" });
  }
});

// Get a single note by ID (requires authentication)
router.get("/:id", isAuthenticated, async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(note);
  } catch (err) {
    console.error(err);
    if (err.name === "CastError") {
      return res.status(400).json({ error: "Invalid note ID" });
    }
    res.status(500).json({ error: "Failed to retrieve the note" });
  }
});

// Update a note by ID (requires authentication)
router.put("/:id", isAuthenticated, async (req, res) => {
  try {
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(updatedNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update the note" });
  }
});

// Delete a note by ID (requires authentication)
router.delete("/:id", isAuthenticated, async (req, res) => {
  try {
    const deletedNote = await Note.findOneAndRemove({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(deletedNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete the note" });
  }
});

module.exports = router;
