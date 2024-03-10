// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:2001/auth/login", {
        username,
        password,
      });

      const { token, userID } = response.data;

      // Set access token in cookies
      setCookies("access_token", token);
      // Save user ID in localStorage for future use
      window.localStorage.setItem("userID", userID);

      // Redirect to home page after successful login
      navigate("/");

      // Clear input fields
      setUsername("");
      setPassword("");
    } catch (error) {
      // Handle login errors
      console.error("Login error:", error);
      // Example: Display a meaningful error message to the user
      alert("Login failed. Please check your username and password.");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;