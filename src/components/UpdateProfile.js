import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match.");
    }

    setLoading(true);
    setError("");
    const promises = [];
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        setLoading(false);
        setError("");
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {});
  }

  return (
    <>
      <div className="form-container">
        <div className="form-title">
          <h2>Update Profile</h2>
        </div>
        {error && console.log(error)}
        <form onSubmit={handleSubmit}>
          <div className="form-group" id="email">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              ref={emailRef}
              required
              defaultValue={currentUser.email}
            />
          </div>
          <div className="form-group" id="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Leave blank to keep the same"
            />
          </div>
          <div className="form-group" id="password-confirm">
            <label htmlFor="password-confirm">Password Confirmation</label>
            <input
              type="password"
              ref={passwordConfirmRef}
              placeholder="Leave blank to keep the same"
            />
          </div>
          <button disabled={loading} className="submit-btn" type="submit">
            Update
          </button>
        </form>
        <div className="form-sub-content">
          <Link to="/dashboard">Cancel</Link>
        </div>
      </div>
    </>
  );
}
