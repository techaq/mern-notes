// NoteList.js
import React from "react";
import NoteItem from "./NoteItem.jsx";

const NoteList = ({ notes, onDeleteNote, onEditNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note._id}
          note={note}
          onDeleteNote={onDeleteNote}
          onEditNote={onEditNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
