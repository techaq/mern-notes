// Dashboard.js
import React from "react";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

function Dashboard() {
  return (
    <div>
      <h1>My Notes</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default Dashboard;
