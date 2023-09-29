const Note = require("../../models/Note.cjs"); // note model
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
    // Creates a new note and associate it with the authenticated user
    const newNote = await Note.create({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id,
    });

    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ error: "Failed to create a new note" });
  }
}

async function list(req, res) {
  try {
    // Retrieve a list of notes associated with the authenticated user
    const notes = await Note.find({ author: req.user._id });

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
    // Update a note by its ID, associated with the authenticated user
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id, author: req.user._id },
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
    // Remove a note by its ID, associated with the authenticated user
    const removedNote = await Note.findOneAndRemove({
      _id: req.params.id,
      author: req.user._id,
    });

    if (!removedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete the note" });
  }
}
