import React from "react";
import { Link } from "react-router-dom";
import QuestionMarkImg from "../../images/question_mark.jpg";

export default function Discover() {
  return (
    <section className="discover">
      <div className="content">
        <h3 className="title">Looking for more?</h3>
        <p>
          Check out our search empowered by Pexels. Get inspired and save your
          favorite pictures by creating an account.
        </p>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div className="image">
        <img src={QuestionMarkImg} alt="Question mark" />
      </div>
    </section>
  );
}
