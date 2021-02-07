import React from "react";
import { Link } from "react-router-dom";
import CoffeeImg from "../../images/cozy-coffee.jpg";

export default function SeeMore() {
  return (
    <section>
      <div className="seemore-container">
        <div className="context">
          <h3>Want to see more?</h3>
          <p>
            Check out Coffee Corner for more photos of the amazing beverage. Or
            create an account and save images to your inventory.
          </p>
          <div className="seemore-buttons">
            <Link to="/coffee-corner">Coffee Corner</Link>
            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
          </div>
        </div>
        <div>
          <img src={CoffeeImg} alt="cozy coffee" />
        </div>
      </div>
    </section>
  );
}
