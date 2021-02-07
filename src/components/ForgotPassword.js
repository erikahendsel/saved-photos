import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions.");
    } catch {
      setError("Failed to reset password.");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="form-container">
        <div className="form-title">
          <h2>Password Reset</h2>
        </div>
        {error && console.log(error)}
        {message && console.log(message)}
        <form onSubmit={handleSubmit}>
          <div className="form-group" id="email">
            <label htmlFor="email">E-mail</label>
            <input type="email" ref={emailRef} required />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button disabled={loading} className="submit-btn" type="submit">
            Reset Password
          </button>
        </form>
        <div className="form-sub-content">
          <Link to="/login">Log In</Link>
        </div>
        <div className="form-sub-content">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
}
