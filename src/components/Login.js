import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true); //disable sign up button when waiting
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push("/dashboard");
    } catch {
      setError("Failed to log in.");
      setLoading(false);
    }
  }

  return (
    <>
      <div className="form-container">
        <div className="form-title">
          <h2>Log In</h2>
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
          {error && <div className="error-message">{error}</div>}
          <button disabled={loading} className="submit-btn" type="submit">
            Log In
          </button>
        </form>
        <div className="form-sub-content">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="form-sub-content">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
}
