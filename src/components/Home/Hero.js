import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../images/cat_and_dog.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <img src={heroImg} alt="cat and dog" className="hero-img" />
        <div className="hero-content">
          <p className="hero-title">Your favorite images in one place</p>
          <ul className="hero-buttons">
            <li className="hero-get-started-btn">
              <Link to="/login">Get Started</Link>
            </li>
            <li className="hero-discover-btn">
              <Link to="/search">Discover</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
