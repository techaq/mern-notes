import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access route parameters
import { fetchNoteById } from "../../utilities/notes-service"; // Import a function to fetch a note by ID

function NoteViewPage() {
  const { id } = useParams(); // Get the "id" parameter from the URL
  const [note, setNote] = useState(null);

  useEffect(() => {
    // Fetch the note with the specified ID when the component mounts
    const fetchNote = async () => {
      try {
        const fetchedNote = await fetchNoteById(id); // Replace with your fetchNoteById function
        setNote(fetchedNote);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };

    fetchNote();
  }, [id]);

  return (
    <div>
      <h2>Note Details</h2>
      {note ? (
        <div>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          {/* You can add more information or actions related to the note here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NoteViewPage;
