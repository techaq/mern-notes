// routes/api/notes.cjs
const express = require("express");
const router = express.Router();
const Note = require("../../models/Note.cjs"); // Import your Note model

// Create a new note
router.post("/", async (req, res) => {
  try {
    const newNote = new Note(req.body);
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create a new note" });
  }
});

// Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve notes" });
  }
});

// Get a single note by ID
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
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

// Update a note by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated note
    });
    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(updatedNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update the note" });
  }
});

// Delete a note by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndRemove(req.params.id);
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
