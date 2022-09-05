import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import Menu from "../Menu/Menu";
import Logo from "../../../image/logo.png";
import { useState } from "react";

const Navbar = ({ toggleDrawer, routes }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const addBoxShadow = () => {
    if (window.scrollY >= 299) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  window.addEventListener("scroll", addBoxShadow);

  return (
    <div className={`navbarr ${showNavbar ? "sticky" : null}`}>
      <div className="navContainer">
        <div className="navbarBrand">
          <Link to="/">
            <img
              src={Logo}
              alt="Nasdec Royal School Logo"
              style={{ width: "10rem", height: "9rem" }}
            />
          </Link>
        </div>

        <div className="rightNav">
          <div className="navRoutes">
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <Link to={route.link} className="navRoute" key={route.name}>
                  {route.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="drawerButton" onClick={toggleDrawer}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
