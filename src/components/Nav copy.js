import React from "react";
import { Link } from "react-router-dom";

export default function Navold() {
  return (
    <div className="header-menu">
      <h1>Logo</h1>
      <div className="header-links">
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}
