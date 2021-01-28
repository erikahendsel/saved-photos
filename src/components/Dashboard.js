import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out.");
    }
  }

  return (
    <>
      <div className="form-container">
        <div className="form-title">
          <h2>Dashboard</h2>
        </div>
        {error && console.log(error)}
        <div>
          <strong>E-mail: </strong>
          {currentUser.email}
        </div>
        <Link to="/update-profile">Update Profile</Link>
      </div>
      <div className="form-sub-content">
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </>
  );
}
