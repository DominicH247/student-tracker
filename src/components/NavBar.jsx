import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/students/*">
        <button>Show Students</button>
      </Link>
    </nav>
  );
};

export default NavBar;
