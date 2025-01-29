import React from "react";
import "./CreateAccount.css";

const CreateAccount = () => {
  return (

    <>
    <div className="create-container">
      <div className="form-container">
        <h1 className="app-title">Medee App</h1>
        <h2 className="form-title">Create Account</h2>
        <p className="login-prompt">
          Already a member? <a href="/login" className="login-link">Login</a>
        </p>
        <form>
          <div className="name-fields">
            <input type="text" placeholder="First Name" className="input-field" />
            <input type="text" placeholder="Last Name" className="input-field" />
          </div>
          <input type="email" placeholder="Email" className="input-field full-width" />
          <input type="password" placeholder="Password" className="input-field full-width" />
          <div className="checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="terms-label">
              I agree to the <a href="/terms" className="terms">terms and conditions</a>
            </label>
          </div>
          <button type="submit" className="submit-button">Create Account</button>
        </form>
        <div className="divider">
          <span className="divider-text">or register with</span>
        </div>
        <button className="google-button">
          <img
            src="google-icon.png"
            alt="Google"
            className="google-icon"
          />
          Google
        </button>
      </div>
      <div className="background-image-container">
</div>
    </div>


</>
  );
};

export default CreateAccount;
