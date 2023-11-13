import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React from "react";

const Navbar = () => {
  return (
    <div classname="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/conatact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
