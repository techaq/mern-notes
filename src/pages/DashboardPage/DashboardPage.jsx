import React, { useState, useEffect } from "react";
import NoteForm from "../../components/NoteForm/NoteForm.jsx";
import NoteList from "../../components/NoteList/NoteList.jsx";
import axios from "axios"; // Import Axios

function DashboardPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Define a function to fetch the user's notes
    const fetchUserNotes = async () => {
      try {
        // Make an HTTP GET request to fetch the user's notes
        const response = await axios.get("/api/notes"); // Adjust the API endpoint as needed
        const userNotes = response.data; // Assuming your API returns an array of notes

        setNotes(userNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchUserNotes();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {/* Render NoteForm for creating/editing notes */}
        <NoteForm />

        {/* Render NoteList for displaying the user's notes */}
        <NoteList notes={notes} />
      </div>
    </div>
  );
}

export default DashboardPage;
