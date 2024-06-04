import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        Home
      </Link>
      <Link to="/soda">
        Soda
      </Link>
      <Link to="/chips">
        Chips
      </Link>
      <Link to="/FreshSardins">
        FreshSardins
      </Link>
    </nav>
  );
}

export default NavBar;