import React from "react";
import { Navbar } from "./navBar.jsx";
import { Link } from "react-router-dom";
// import { Carousel } from 'react-bootstrap'; // Import Carousel from React Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
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
        <Link to="/auth/login">
          <button>Surf Your Recipes...</button>
        </Link>
        {/* <Carousel>
          <Carousel.Item>
            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.abhibus.com%2Fblog%2Fmust-try-foods-on-your-next-kerala-trip%2F&psig=AOvVaw1yvJu5VlOTv7XS7HgoOE7q&ust=1710233393595000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJjokIPq64QDFQAAAAAdAAAAABAP">
              <img
                className="d-block w-100"
                src="image1.jpg"
                alt="Food 1"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://example.com/recipe2">
              <img
                className="d-block w-100"
                src="image2.jpg"
                alt="Food 2"
              />
            </a>
          </Carousel.Item>
          {/* Add more Carousel.Items for additional images */}
          
      </div>
    </div>
  );
};

export default Home;
