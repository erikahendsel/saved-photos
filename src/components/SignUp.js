import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match.");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to create an account.");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="form-container">
        <div className="form-title">
          <h2>Sign Up</h2>
        </div>
        {error && console.log(error)}
        <form onSubmit={handleSubmit}>
          <div className="form-group" id="email">
            <label htmlFor="email">E-mail</label>
            <input type="email" ref={emailRef} required />
          </div>
          <div className="form-group" id="password">
            <label htmlFor="password">Password</label>
            <input type="password" ref={passwordRef} required />
          </div>
          <div className="form-group" id="password-confirm">
            <label htmlFor="password-confirm">Password Confirmation</label>
            <input type="password" ref={passwordConfirmRef} required />
          </div>
          <button disabled={loading} className="submit-btn" type="submit">
            Sign Up
          </button>
        </form>
        <div className="form-sub-content">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  );
}
