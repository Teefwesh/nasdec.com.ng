import React from "react";
// import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../image/logo.png";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = ({ showMenu }) => {
  return (
    <div id="navbar" className={`#navbar ${!showMenu ? " active" : null}`}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="#schools">Schools</Link>
      <Link to="#news">News</Link>
      <Link to="/#">Admission</Link>
      <Link to="/#">Gallery</Link>
      <Link to="#support">Contact</Link>
      <img src={Logo} alt="" />
    </div>
  );
};

export default NavBar;
