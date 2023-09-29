// NoteList.jsx
import React from "react";
import NoteItem from "../NoteItem/NoteItem.jsx";

function NoteList() {
  // Fetch notes from your API or state and map them to NoteItem components
  const notes = [];

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default NoteList;
