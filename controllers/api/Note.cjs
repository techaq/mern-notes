// controllers/api/note.cjs
const Note = require("../../models/note.cjs"); // note model
const User = require("../../models/user.cjs"); // user model

module.exports = {
  create,
  list,
  get,
  update,
  remove,
};

async function create(req, res) {
  try {
    // Create a new note and associate it with the authenticated user
    const note = await Note.create({
      user: req.user._id, // associate the note with the logged-in user
      title: req.body.title,
      content: req.body.content,
    });

    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function list(req, res) {
  try {
    // Retrieve a list of notes associated with the authenticated user
    const notes = await Note.find({ user: req.user._id });

    res.json(notes);
  } catch (err) {
    res.status(400).json({ error: "Failed to retrieve notes" });
  }
}

async function get(req, res) {
  try {
    // Retrieve a single note by its ID, associated with the authenticated user
    const note = await Note.findOne({
      _id: req.params.id,
      author: req.user._id,
    });

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
  } catch (err) {
    res.status(400).json({ error: "Failed to retrieve the note" });
  }
}

async function update(req, res) {
  try {
    // Find and update a note by its ID, associated with the authenticated user
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { $set: req.body },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json(updatedNote);
  } catch (err) {
    res.status(400).json({ error: "Failed to update the note" });
  }
}

async function remove(req, res) {
  try {
    // Find and remove a note by its ID, associated with the authenticated user
    const removedNote = await Note.findOneAndRemove({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!removedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete the note" });
  }
}
