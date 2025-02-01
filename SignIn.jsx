import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="form-container">
        <h1 className="app-title">Medee App</h1>
        <h2 className="form-title">Sign In</h2>
        <p className="welcome-text">Welcome back! Login to your account</p>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="input-field full-width"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field full-width"
          />
          <div className="forgot-password">
            <a href="/forgot-password" className="forgot-password-link">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p className="signup-prompt">
          Already a member?{" "}
          <a href="/signup" className="signup-link">
            Sign up
          </a>
        </p>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default SignIn;
