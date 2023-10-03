import styles from "./NoteListItem.module.css";

export default function NoteListItem({ note }) {
  return (
    <div className={styles.NoteListItem}>
      <div>
        <div>
          <div>
            Note Id: <span className="smaller">{note.noteId}</span>
          </div>
          <div className="smaller">
            {new Date(note.updatedAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}
