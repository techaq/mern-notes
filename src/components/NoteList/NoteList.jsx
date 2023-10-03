import styles from "./NoteList.module.css";
import NoteListItem from "../NoteListItem/NoteListItem";

export default function NoteList({ notes }) {
  const noteItems = notes.map((note) => {
    return <NoteListItem key={note._id} note={note} />;
  });

  return (
    <main className={styles.NoteList}>
      {noteItems.length ? (
        noteItems
      ) : (
        <span className={styles.noNotes}> No Previous Notes </span>
      )}
    </main>
  );
}
