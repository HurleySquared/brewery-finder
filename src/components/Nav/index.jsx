import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <a href="/">Home</a>
      {/* Add about page explaining application */}
      <a href="/">About</a>
      {/* Future use for saved breweries in different cities */}
      <a href="/">Saved Brews</a>
    </nav>
  )
}

export default Nav;