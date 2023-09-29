import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"; // Import Navigate for redirection
import AuthPage from "../AuthPage/AuthPage.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import DashboardPage from "../DashboardPage/DashboardPage.jsx"; // Import the Dashboard component
import NoteViewPage from "../NoteViewPage/NoteViewPage.jsx"; // Import the NoteViewPage component
import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  return (
    <main className="App">
      {user ? (
        <>
          {/* NavBar and Routes are only available when the user is logged in */}
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/note/:id" element={<NoteViewPage />} />
            <Route path="/*" element={<Navigate to="/dashboard" />} />{" "}
            {/* Redirect unmatched routes to the dashboard */}
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="auth/*" element={<AuthPage setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />{" "}
          {/* Redirect unauthenticated users to the login page */}
        </Routes>
      )}
    </main>
  );
}

export default App;
