import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="navar-container container">
          <Link to="/" className="navbar-logo">
            LOGO
          </Link>
          <div className="menu-icon"></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
