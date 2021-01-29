import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Nav() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  console.log(currentUser);

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
    <div className="header-menu">
      <h1 className="logo">
        <Link to="/">Logo</Link>
      </h1>
      <div className="header-links">
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        {/* <Link to="/login">Log In</Link> */}
        {currentUser ? (
          <Link to="/" onClick={handleLogout}>
            Log Out
          </Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </div>
  );
}
