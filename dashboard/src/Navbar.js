import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-start">
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            exact
            to="/"
          >
            Submit Result
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/results"
          >
            Results
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
