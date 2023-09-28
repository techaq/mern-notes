import React, { useState, useEffect } from "react";
import { checkAuthenticationStatus } from "../../utilities/auth-service"; // Replace with your auth service
import NoteForm from "../../components/NoteForm/NoteForm.jsx"; // Import your NoteForm component

function NoteFormPage() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check the user's authentication status when the component mounts
    const checkAuthStatus = async () => {
      const isAuthenticated = await checkAuthenticationStatus();
      setAuthenticated(isAuthenticated);
    };

    checkAuthStatus();
  }, []);

  return (
    <div>
      <h1>Create or Edit Note</h1>
      {authenticated ? (
        <NoteForm />
      ) : (
        <p>Please log in to create or edit notes.</p>
      )}
    </div>
  );
}

export default NoteFormPage;
