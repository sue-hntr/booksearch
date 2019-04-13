import React from "react";
//Create link for Saved
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <Link className="navbar-brand" to="/saved">
        Database
      </Link>
      <Link className="navbar-brand" to="/books">
        Return
      </Link>

    </nav>
  );
}

export default Nav;

// <Link
// to="/discover"
// className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
// >
// Discover
// </Link>
