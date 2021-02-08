import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import CoffeeCornerImg from "../images/coffee-icon.svg";
import HeartImg from "../images/heart-icon.svg";
import LoginImg from "../images/login-icon.svg";
import LogoutImg from "../images/logout-icon.svg";

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
      <p className="logo">
        <Link to="/">CoffeePic</Link>
      </p>
      <div className="header-links">
        <Link to="/coffee-corner">
          <img src={CoffeeCornerImg} alt="Coffee Corner" />
          <span className="nav-text">Coffee Corner</span>
        </Link>
        {currentUser ? (
          <Link to="/favorites">
            <img src={HeartImg} alt="Favorites" />
            <span>Favorites</span>
          </Link>
        ) : (
          ""
        )}

        {/* <Link to="/login">Log In</Link> */}
        {currentUser ? (
          <Link to="/" onClick={handleLogout}>
            <img src={LogoutImg} alt="Log In" />
            <span>Log Out</span>
          </Link>
        ) : (
          <Link to="/login">
            <img src={LoginImg} alt="Log In" />
            <span>Log In</span>
          </Link>
        )}
      </div>
    </div>
  );
}
