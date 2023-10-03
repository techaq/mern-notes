// Dashboard.jsx
import React, { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

function Dashboard() {
  const [selectedNote, setSelectedNote] = useState(null);

  // Function to handle selecting a note to view
  const handleNoteSelect = (note) => {
    setSelectedNote(note);
  };

  // Function to clear the selected note (e.g., when closing the view)
  const clearSelectedNote = () => {
    setSelectedNote(null);
  };

  return (
    <div>
      <h1>My Notes</h1>
      <NoteForm />
      <div className="dashboard-container">
        <NoteList onNoteSelect={handleNoteSelect} />
        {selectedNote && (
          <NoteView note={selectedNote} onClose={clearSelectedNote} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
