import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <button className="navButton">Home</button>
      </Link>
      <Link to="/students/*">
        <button className="navButton">Show Students</button>
      </Link>
      <Link to="/metrics">
        <button className="navButton">Show Metrics</button>
      </Link>
    </nav>
  );
};

export default NavBar;
