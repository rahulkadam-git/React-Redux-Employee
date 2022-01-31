import React from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "./ErrorAlert";
export default function LoginForm(props) {
  let { handleSubmit, seteCode, setPassword, setError, errorMessage } =
    props.loginState;

  return (
    <div className="col-lg-7 bg-color align-self-center">
      <div className="form-section">
        <div className="title">
          <h3>Sign into your account</h3>
        </div>
        <div className="login-inner-form">
          <form method="post" onSubmit={handleSubmit}>
            {errorMessage ? (
              <ErrorAlert
                errorMessage={errorMessage}
                clearError={() => setError(undefined)}
              ></ErrorAlert>
            ) : (
              false
            )}

            <div className="userInput-box">
              <input
                type="text"
                id="username"
                onChange={(e) => seteCode(e.target.value)}
                placeholder="Enter your Ecode"
              />
            </div>
            <div className="password-box">
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <button className="submit-btn btn btn-primary">Submit</button>
            <div className="createAccount">
              <Link to="/register">Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
