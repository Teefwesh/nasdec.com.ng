import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ showMenu }) => {
  return (
    <div id="navbar" className={!showMenu ? "#navbar active" : "#navbar"}>
      <Link to="/#">Home</Link>
      <Link to="/#">About</Link>
      <Link to="/#">Schools</Link>
      <Link to="/#">Facilities</Link>
      <Link to="/#">Admission</Link>
      <Link to="/#">Gallery</Link>
      <Link to="/#">Support</Link>
    </div>
  );
};

export default NavBar;
