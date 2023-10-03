// routes/api/Note.cjs
const express = require("express");
const router = express.Router();
const Note = require("../../models/note.cjs");
const noteController = require("../../controllers/api/note.cjs");

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next(); // User is authenticated, proceed to the route handler
  }
  res.status(401).json({ error: "Unauthorized" });
}

/// POST /api/note (to create a new note)
router.post("/", noteController.create);

// GET /api/note (to retrieve all notes)
router.get("/", noteController.getNotes);

// GET /api/note/:id (to retrieve a specific note by ID)
router.get("/:id", noteController.getNoteById);

// PUT /api/note/:id (to update a specific note by ID)
router.put("/:id", noteController.updateNote);

// DELETE /api/note/:id (to delete a specific note by ID)
router.delete("/:id", noteController.deleteNote);

module.exports = router;
