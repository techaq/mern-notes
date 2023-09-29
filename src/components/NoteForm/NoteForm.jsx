// NoteForm.jsx
import React, { useState } from "react";
import axios from "axios";

function NoteForm({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to create a new note
      const response = await axios.post("/api/notes", {
        title,
        content,
      });

      // Check if the request was successful
      if (response.status === 201) {
        // Clear the form fields
        setTitle("");
        setContent("");

        // Optionally, you can call a callback function to refresh the notes list
        if (onNoteAdded) {
          onNoteAdded();
        }
      }
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Save Note</button>
    </form>
  );
}

export default NoteForm;
