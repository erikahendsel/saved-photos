import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="header-menu">
      <h1>Logo</h1>
      <div className="header-links">
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/log in">log in</Link>
      </div>
    </div>
  );
}
