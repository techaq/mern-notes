const Note = require("../../models/note.cjs");

// Controller function to create a new note
async function create(req, res) {
  try {
    const { title, content } = req.body;
    const userId = req.user._id; // Assuming you have user authentication in place

    const newNote = new Note({
      title,
      content,
      userId,
      isSaved: true, // Assuming it's a saved note
    });

    const savedNote = await newNote.save();

    res.status(201).json(savedNote);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Controller function to retrieve all notes
async function getNotes(req, res) {
  try {
    const notes = await Note.find({
      userId: req.user._id, // Filter notes by the user's ID
    }).sort("-updatedAt");

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Controller function to retrieve a specific note by ID
async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Controller function to update a specific note by ID
async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ msg: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// Controller function to delete a specific note by ID
async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndRemove(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ msg: "Note not found" });
    }

    res.status(200).json({ msg: "Note deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

module.exports = {
  create,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
