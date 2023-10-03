// NoteList.jsx
import React from "react";

function NotesList({ notes, selectedNote }) {
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            isSelected={note.id === selectedNote?.id}
          />
        ))}
      </ul>
      {selectedNote && (
        <div className="note-details">
          <h2>{selectedNote.title}</h2>
          <p>{selectedNote.content}</p>
        </div>
      )}
    </div>
  );
}

export default NotesList;
