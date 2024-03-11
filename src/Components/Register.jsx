import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      await axios.post("http://localhost:2001/auth/register", {
        username,
        password,
      });

      // Upon successful registration, alert the user and redirect to login page
      alert("Registration Completed! Now login.");
      navigate("/auth/login");

      // Clear input fields and error message
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
    } catch (error) {
      // Handle registration errors
      console.error("Registration error:", error);
      // Example: Display a meaningful error message to the user
      alert("Registration failed. Please try again later.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          <i
            className={`password-toggle ${showPassword ? "visible" : ""}`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </i>
        </div>
        <div className="form-group">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirm Password"
          />
          <i
            className={`password-toggle ${showConfirmPassword ? "visible" : ""}`}
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </i>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Register</button>
        {/* Link to login page */}
        <p>
          Already registered? <Link to="/auth/login">Login here</Link>
        </p>
        <Link to="/">
          <button >Back TO Home</button>
        </Link>
      </form>
      
    </div>
  );
};

export default Register;
