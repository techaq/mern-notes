import styles from "./DashboardPage.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NoteForm from "../../components/NoteForm/NoteForm.jsx";
import NoteList from "../../components/NoteList/NoteList.jsx";
import axios from "axios";
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import * as notesAPI from "../../utilities/notes-api";

function DashboardPage({ user, setUser }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const fetchedNotes = await notesAPI.getNotes();
        setNotes(fetchedNotes);
      } catch (err) {
        console.log(err);
      }
    }

    fetchNotes();
  }, []);

  // // Function to refresh notes after creating or updating
  // const refreshNotes = async () => {
  //   try {
  //     const response = await axios.get("/api/note");
  //     const userNotes = response.data;
  //     setNotes(userNotes);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className={styles.DashboardPage}>
      <Logo />
      <Link to="/notes/new" className="buttton btn-sm">
        <h1>Dashboard</h1>
      </Link>
      <div className={styles.dashboardContent}>
        {/* Render NoteForm for creating/editing notes */}
        <NoteForm onNoteAdded={setNotes} />
        {/* Render NoteList for displaying the user's notes */}
        <NoteList notes={notes} />
        {/* <NoteDetail /> */}
      </div>
      <UserLogOut user={user} setUser={setUser} />
    </div>
  );
}
export default DashboardPage;
