import React from "react";
import "./SideDrawer.css";
import { Link, withRouter } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
      <ScrollToTop>
        <Link to="/">
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link to="/about">
          <li>
            <a>About</a>
          </li>
        </Link>
        <Link to="/portfolio">
          <li>
            <a>Portfolio</a>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <a>Contact</a>
          </li>
        </Link>
        </ScrollToTop>
      </ul>
    </nav>
  );
};

export default SideDrawer;
