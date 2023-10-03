import React from "react";

function NoteView({ note, onDelete }) {
  // Handle the delete button click event
  const handleDeleteClick = () => {
    // You can implement the onDelete logic here
    // For example, you can display a confirmation dialog before deleting
    if (window.confirm("Are you sure you want to delete this note?")) {
      onDelete(note.id); // Pass the note ID to the onDelete function
    }
  };

  return (
    <div className="note-view">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default NoteView;
