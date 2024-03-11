import React from "react";
import { Navbar } from "./navBar.jsx";
import { Link } from "react-router-dom";
import "./home.css"; // Import the CSS file

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Recipe Finder</h1>
        <p className="description">
          Welcome to Recipe Finder, your ultimate destination for discovering delicious recipes from around the world! Whether you're a cooking enthusiast or just looking for some culinary inspiration, we've got you covered.
        </p>
        <Link to="/meal">
          <button>Surf Your Recipee...</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
