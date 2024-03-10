import React from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "./navBar.jsx"; // Import as a named export

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to the Home Page</h1>
      {/* <Link to="/auth/login">Login</Link>
      <Link to="/auth/register">Register</Link> */}
    </div>
  );
};

export default Home;
