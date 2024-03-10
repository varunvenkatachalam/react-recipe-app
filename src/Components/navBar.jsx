import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    // Remove the "access_token" cookie completely
    setCookies("access_token", "", { maxAge: 0 });
    // Optionally, clear localStorage if necessary
    // window.localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <div className="navbar">
      {/* <Link to="/">Home</Link> */}
      {cookies.access_token ? (
        <>
          <button onClick={logout}>Logout</button>
          {/* <button>Action 1</button>
          <button>Action 2</button> */}
          {/* Add more buttons as needed */}
        </>
      ) : (
        <>
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/register">Register</Link>
        </>
      )}
    </div>
  );
};