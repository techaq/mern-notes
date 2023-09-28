// NoteItem.js
import React from "react";

const NoteItem = ({ note, onSelect, onDeleteNote, onEditNote }) => {
  return (
    <div className="note-item" onClick={onSelect}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => onDeleteNote(note._id)}>Delete</button>
      <button onClick={() => onEditNote(note)}>Edit</button>
    </div>
  );
};

export default NoteItem;
