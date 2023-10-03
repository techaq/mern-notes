import React, { useState } from "react";
import styles from "./NewNotePage.module.css";

function NewNotePage() {
  const [note, setNote] = useState("");

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const saveNote = () => {
    console.log("Note saved:", note);
  };

  return (
    <div className={styles.newNotePage}>
      <h1>Create a New Note</h1>
      <textarea
        className={styles.noteInput}
        placeholder="Type your note here..."
        value={note}
        onChange={handleNoteChange}
      ></textarea>
      <button className={styles.saveButton} onClick={saveNote}>
        Save Note
      </button>
    </div>
  );
}

export default NewNotePage;
