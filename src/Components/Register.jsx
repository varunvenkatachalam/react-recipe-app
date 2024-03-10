// Register.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:2001/auth/register", {
        username,
        password,
      });

      // Upon successful registration, alert the user and redirect to login page
      alert("Registration Completed! Now login.");
      navigate("/auth/login");

      // Clear input fields
      setUsername("");
      setPassword("");
    } catch (error) {
      // Handle registration errors
      console.error("Registration error:", error);
      // Example: Display a meaningful error message to the user
      alert("Registration failed. Please try again later.");
    }
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
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;