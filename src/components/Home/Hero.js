import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../images/coffee-beans.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <img src={heroImg} alt="cat and dog" className="hero-img" />
        <div className="hero-content">
          <p className="hero-title">Your favorite coffee photos in one place</p>
          <ul className="hero-buttons">
            <li className="hero-get-started-btn">
              <Link to="/login">Get Started</Link>
            </li>
            <li className="hero-discover-btn">
              <Link to="/coffee-corner">Coffee Corner</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
