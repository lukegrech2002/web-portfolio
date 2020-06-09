import React from "react";
import { Link, withRouter } from "react-router-dom";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton.js";

function Navigation(props) {
  const navigationStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <header className="toolbar">
      <nav className="toolbar-navbar">
        <div className="toolbar-toggle-button">
          {/* Burger Menu Icon */}
          <DrawerToggleButton click={props.drawerClickHandler}/> 
        </div>
        <div className="toolbar-logo"><a>Luke Grech</a></div>
        <div className="spacer"></div>
        {/* To create space between logo and nav */}
        <ul className="toolbar-nav-items">
          <Link style={navigationStyle} to="/">
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link style={navigationStyle} to="/about">
            <li>
              <a>About</a>
            </li>
          </Link>
          <Link style={navigationStyle} to="/portfolio">
            <li>
              <a>Portfolio</a>
            </li>
          </Link>
          <Link style={navigationStyle} to="/contact">
            <li>
              <a>Contact</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
