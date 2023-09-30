import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import styles from "./AuthPage.module.css"; // Import the CSS styles

function AuthPage(props) {
  return (
    <main className={styles.authContainer}>
      {" "}
      {/* Apply the authContainer style */}
      <div className={styles.logo}> Notes App </div>{" "}
      {/* Apply the logo style */}
      <div className={styles.authFormContainer}>
        {" "}
        {/* Apply the authFormContainer style */}
        <h2 className={styles.formHeader}>Log In</h2>{" "}
        {/* Apply the formHeader style */}
        <LoginForm setUser={props.setUser} />
        <h2 className={styles.formHeader}>Sign Up</h2>{" "}
        {/* Apply the formHeader style */}
        <SignUpForm setUser={props.setUser} />
      </div>
    </main>
  );
}

export default AuthPage;
