import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewNotePage from "../NewNotePage/NewNotePage.jsx";
import DashboardPage from "../DashboardPage/DashboardPage.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <Routes>
            <Route path="/notes/new" element={<NewNotePage />} />
            <Route
              path="/notes"
              element={<DashboardPage user={user} setUser={setUser} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
