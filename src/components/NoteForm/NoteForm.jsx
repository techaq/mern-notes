import React, { useState } from "react";
import axios from "axios";

function NoteForm({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Please fill in both title and content fields.");
      return;
    }

    try {
      const response = await axios.post("/api/note", {
        title,
        content,
      });

      if (response.status === 201) {
        setTitle("");
        setContent("");
        setError(null);
        setSuccess("Note saved successfully."); // a success message

        if (onNoteAdded) {
          onNoteAdded();
        }
      }
    } catch (error) {
      setError("Error saving note. Please try again.");
      console.error("Error saving note:", error);
    }
  };

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
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
    </div>
  );
}

export default NoteForm;
