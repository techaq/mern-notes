import React from "react";

function NoteItem({ note, onSelect, onDelete }) {
  return (
    <article className="note-item" onClick={onSelect}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={onDelete}>Delete</button>
    </article>
  );
}

export default NoteItem;
