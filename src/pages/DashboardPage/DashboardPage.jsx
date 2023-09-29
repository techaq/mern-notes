//src/pages/DashboardPage/DashboardPage.jsx
import React, { useState, useEffect } from "react";
import NoteForm from "../../components/NoteForm/NoteForm.jsx";
import NoteList from "../../components/NoteList/NoteList.jsx";
import axios from "axios"; // Import Axios

import styles from "./DashboardPage.module.css";
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";

function DashboardPage({ user, setUser }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // function to fetch the user's notes
    const fetchUserNotes = async () => {
      try {
        const response = await axios.get("/api/notes");
        const userNotes = response.data;

        setNotes(userNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchUserNotes();
  }, []);

  // Function to refresh notes after creating or updating
  const refreshNotes = async () => {
    try {
      const response = await axios.get("/api/notes");
      const userNotes = response.data;
      setNotes(userNotes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <div className={styles.dashboard}>
      <Logo />
      <h1>Dashboard</h1>
      <div className={styles.dashboardContent}>
        {/* Render NoteForm for creating/editing notes */}
        <NoteForm onNoteAdded={refreshNotes} />

        {/* Render NoteList for displaying the user's notes */}
        <NoteList notes={notes} />
      </div>
      <UserLogOut user={user} setUser={setUser} />
    </div>
  );
}
export default DashboardPage;
